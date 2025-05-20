(function($)
{
	if(!$.fancybox)
		return;
	
	if(typeof $.fancybox.defaults === 'undefined')
		$.fancybox.defaults = {};
	
	if(typeof $.fancybox.defaults.media === 'undefined')
		$.fancybox.defaults.media = {};
	
	const getVideoIdBySrc = function(src)
	{
		let matches = (src + '').match(/https:\/\/rutube\.ru\/play\/embed\/([A-Za-z0-9]+)/);
		return matches ? matches[1] : null;
	}
	
	let registered = false;
	const listeners = {};
	const registerListeners = function(videoId, listener)
	{
		listeners[videoId] = listener;
		if(!registered)
		{
			window.addEventListener('message', function(event){
				try
				{
					const data = JSON.parse(event.data);
					if(data.type === 'player:ready' && data.data && data.data.videoId && listeners[data.data.videoId])
					{
						listeners[data.data.videoId]();
						deleteListener(data.data.videoId)
					}
				}
				catch(e){
				
				}
			})
			registered = true;
		}
	}
	
	const deleteListener = function(video)
	{
		if(video && listeners[video])
			delete listeners[video]
	}
	
	const startVideo = function()
	{
		const instance = $.fancybox.getInstance();
		const iframe = instance.current.$content.find("iframe");
		
		if(!iframe || !iframe.length)
			return;
		
		const videoId = getVideoIdBySrc(iframe.attr('src'));
		
		const postAutoplay = function(toStart){
			if(toStart === true)
				iframe[0].contentWindow.postMessage(
					JSON.stringify(
						{
							type: 'player:setCurrentTime',
							data: {time: 0}
						}
					), "*"
				);
			iframe[0].contentWindow.postMessage(
				JSON.stringify(
					{
						type: 'player:play',
						data: {}
					}
				), "*"
			);
		}
		
		if(videoId)
			registerListeners(videoId, function(){
				postAutoplay(true);
			});
		else
		{
			postAutoplay();
			iframe.on('load', postAutoplay);
		}
	}
	
	const destroyVideo = function()
	{
		const instance = $.fancybox.getInstance();
		const iframe = instance.current.$content.find("iframe");
		
		if(!iframe || !iframe.length)
			return;
		
		const videoId = getVideoIdBySrc(iframe.attr('src'));
		
		if(videoId)
			deleteListener(videoId);
	}
	
	$.fancybox.defaults.media.rutube = {
		matcher: /rutube\.ru\/((video\/(private\/)?)|(play\/embed\/))([A-Za-z0-9]+)(\/(\?(.*)))?/i,
		params: {
			t: 0,
		},
		paramPlace: 8,
		type: "iframe",
		url: "https://rutube.ru/play/embed/$5/",
	};
	
	$(document).on("afterShow.fb", function(e, instance, current)
	{
		if(current.contentSource === "rutube")
			startVideo();
	});
	
	$(document).on("beforeClose.fb", function(e, instance, current)
	{
		if(current.contentSource === "rutube")
			destroyVideo();
	});
})(jQuery);