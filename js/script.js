$(function(){
/*video support*/	
	$('.nav-video-support li:eq(0)').addClass('active');
	$('.nav-video-support li').click(function () {
		var ind = $(this).index();
		$('.img-video-support').find('.item-video-support:eq(' + ind + ')').show().siblings('.item-video-support:visible').hide();
		$(this).addClass('active');
		$(this).siblings('.nav-video-support li').removeClass('active')
		return false;
	});	
	
//scroll navigation
	if($(window).width() < 999){
		$('.scroll').click(function(event){
			event.preventDefault();
			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top - 76;
			$('html, body').animate({scrollTop:target_top}, 1000)
		});
	}
	else{
		$('.scroll').click(function(event){
			event.preventDefault();
			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top - 92;
			$('html, body').animate({scrollTop:target_top}, 1000)
		});
	}	
	
	$('.link-rekviz a').click(function(){
		$(this).toggleClass('active');
		$(this).parent().prev().toggleClass('active')
		return false
	});
	
	
	
/*page price*/
	$('.head-func-tariff_n i, .arrow-items-tariff_n').click(function(){
		$(this).parent().toggleClass('active').next().toggle()
		return false;
	});
	
	$('.tabs-price_nn').each(function(){
		$(this).find('.nav-tabs-price_nn div:eq(0), .nav-tabs-price_nn li:eq(0)').addClass('active');
		$(this).find('.nav-tabs-price_nn div, .nav-tabs-price_nn li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-price_nn').find('.cont-tabs-price_nn').find('.tab-price_nn:eq(' + ind + ')').show().addClass('active').siblings('.tab-price_nn:visible').hide().removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.nav-tabs-price_nn div, .nav-tabs-price_nn li').removeClass('active')
			return false;
		});
	});	
	
	$('.tabs-price_n').each(function(){
		$(this).find('.nav-tabs-price_n div:eq(0), .nav-tabs-price_n li:eq(0)').addClass('active');
		$(this).find('.nav-tabs-price_n div, .nav-tabs-price_n li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-price_n').find('.cont-tabs-price_n').find('.tab-price_n:eq(' + ind + ')').show().addClass('active').siblings('.tab-price_n:visible').hide().removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.nav-tabs-price_n div, .nav-tabs-price_n li').removeClass('active')
			return false;
		});
	});	
	
	$('.tabs-price-mob_n').each(function(){
		$(this).find('.nav-tabs-price-mob_n div:eq(0), .nav-tabs-price-mob_n li:eq(0)').addClass('active');
		$(this).find('.nav-tabs-price-mob_n div, .nav-tabs-price-mob_n li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-price-mob_n').find('.cont-tabs-price-mob_n').find('.tab-tabs-price-mob_n:eq(' + ind + ')').show().addClass('active').siblings('.tab-tabs-price-mob_n:visible').hide().removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.nav-tabs-price-mob_n div, .nav-tabs-price-mob_n li').removeClass('active')
			return false;
		});
	});
	
	$('.info-wrk_n i').click(function(){
		$(this).next().toggleClass('active')
	});
	
	$('.die-close-work_n').click(function(){
		$(this).parent().parent().removeClass('active')
	});
	
	
	$('.slider-special-form-mob_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade:false
	});	
	
    $('.switch-tariff_n input[type="checkbox"]').change(function() {
        let parentDiv = $(this).closest('.item-func-tariff_n');
        
        if ($(this).is(':checked')) {
            parentDiv.removeClass('no-active');
        } else {
            parentDiv.addClass('no-active');
        }
    });
/*page price*/
	
	
	$('.slider-sale_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});	
	
	
//partners
	$('.slider-partners-ww_mob').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});	
	
	
	
	
//docs
	$('.head-doc-cab_new span').click(function(){
		$(this).toggleClass('active').parent().next().toggle()
		return false;
	});
	
	
	
//crm
	$('.slider-leads-crm').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		fade:false,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});		
	
	
//lk	
	$('.slider-about-lk').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});		
	
	
//animation header
	function header_promo(){
		var top = $(document).scrollTop();
		if (top > 2) $('.wr-header_promo').addClass('fixed_s');
		else $('.wr-header_promo').removeClass('fixed_s');	
	}
	
	$(window).scroll(function() {
		header_promo();
	});	
	
	header_promo();

	$('.slider-educat').slick({
		dots: false,
		arrows:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});	
//tabs
	$('.tabs-tb').each(function(){
		$(this).find('.nav-tb div:eq(0), .nav-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tb div, .nav-tb li').click(function () {
			if (window.innerWidth < 767) {
						setTimeout(function() {
						$('.slider-educat').slick('refresh');
						}, 100);
			}
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tb').find('.tab-tb:eq(' + ind + ')').show().addClass('active').siblings('.tab-tb:visible').hide().removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.nav-tb div, .nav-tb li').removeClass('active')
			return false;
		});
	});	
	


//promo	
	$('.slider-effect-promo_w').slick({
	  dots: false,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
		{
		  breakpoint: 999,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});	
	
	
//for
	$('.slider-programm-for').slick({
		dots: true,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});	
	
	
	
	$('.but-more-text_n	 a').click(function(){
		$(this).toggleClass('active').parent().prev().toggleClass('active');
		return false;
	});
	
	$('.slider-webinars_n').slick({
		dots: false,
		arrows:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});			

	
	
/*possible*/
	if ($('.nav-possib_n').length) {
		var topPos = $('.nav-possib_n').offset().top;
		$(window).scroll(function() {
			var top = $(document).scrollTop();
			if (top > topPos) $('.nav-possib_n').addClass('fixed_n');
			else $('.nav-possib_n').removeClass('fixed_n');
		});
	}
	
	$('.arrow-possib_n').click(function(){
		$(this).toggleClass('active');
		$('.nav-possib_n').toggleClass('active')
		return false;
	});
 
    $('.nav-possib_n a').on('click', function(e) {
        e.preventDefault();
		 $('.nav-possib_n ul').scrollLeft(0);
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1, 'linear');
    });
   
    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();

        $('.section_n').each(function() {
            var sectionOffset = $(this).offset().top - 250;
            var sectionHeight = $(this).outerHeight();
            var sectionId = $(this).attr('id');

            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                $('.nav-possib_n a').parent().removeClass('active');
                $('.nav-possib_n a[href="#' + sectionId + '"]').parent().addClass('active');
            }
        });
    });	
	
	const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
	
	if (isMobile) {
		const $navLinks = $('.nav-possib_n ul li a');
		const $sections = $('.section_n');
		const $navContainer = $('.nav-possib_n');
	
		$(window).on('scroll', function() {
			let currentSection = '';
	
			const scrollPosition = $(window).scrollTop();
			const windowHeight = $(window).height();
	
			$sections.each(function() {
				const sectionTop = $(this).offset().top;
				const sectionBottom = sectionTop + $(this).outerHeight();
	
				if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom) {
					currentSection = $(this).attr('id');
				}
				
				if (scrollPosition < $sections.first().offset().top) {
					currentSection = '';
				}
			});
	
			$navLinks.removeClass('active').each(function() {
				if ($(this).attr('href') === `#${currentSection}`) {
					$(this).addClass('active');
					
					$(this)[0].scrollIntoView({ inline: 'center' });
				}
			});
		});
	
	 
		$(window).trigger('scroll');
	}
	
	$('.list-possib-usefull_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		fade: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});

	$('.list-possib-marketing_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		fade: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.list-possible-messenger_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.nav-mobile-possible li:eq(0)').addClass('active');
	$('.nav-mobile-possible li').click(function () {
		var ind = $(this).index();
		$('.list-possib-mobile-app_n').find('.item-possib-mobile-app_n:eq(' + ind + ')').show().siblings('.item-possib-mobile-app_n:visible').hide();
		$(this).addClass('active');
		$(this).siblings('.nav-mobile-possible li').removeClass('active')
		return false;
	});
/*possible*/	

	$('.slider-integrat_mob').slick({
		dots: false,
		arrows:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});	
	
	
	
	
	
	
	$('.slider-state_n').slick({
	  dots: false,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
		{
		  breakpoint: 999,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});

	$('.slider-reviews-new').slick({
		dots: false,
		arrows:true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1220,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});	
	
/*record online*/
	$('.slider-outside-reviews').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots:false,
		fade: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 999,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			},
				{
					breakpoint: 767,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
				{
					breakpoint: 600,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.more-reviews-mob a').click(function(){
		$(this).parent().toggleClass('active').parent().find('.text-review-new').toggleClass('active');
		return false;
	});	
	
	$('.more-text_n a').click(function(){
		$(this).parent().toggleClass('active').prev().toggle();
		return false;
	});	
	
//mobile app
	$('.head-ask_n').click(function(){
		$(this).parent().toggleClass('active')
		return false;
	});
	
	$('.list-block-free_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.list-complex-trainer_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	


	$('.list-complex-client_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
//sliders for mob
	$('.slider-func-main_n').slick({
		dots: false,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$('.slider-avtomat_n').slick({
		dots: true,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: 'unslick'
			},
		{
		  breakpoint: 320,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
//menu mobile
	$('.menu-tt a').click(function(){
		$(this).parent().toggleClass('active');
		$('.panel-menu-mob_n').toggle();
		$('body').toggleClass('active');
		$('.wr-header_promo').toggleClass('active_h');
		return false;
	});
	
	$('.panel-menu_mob>ul>li>i').click(function(){
		$(this).toggleClass('active').next().toggle();
	});
		
//slider clients	
	var swiper = new Swiper(".slider-clients", {
		loop: true,
		autoplay: {
			delay: 1,
			disableOnInteraction: false
		},
		slidesPerView: 7,
		speed: 5000,
		grabCursor: false,
		mousewheelControl: false,
		keyboardControl: false,
		breakpoints: {
			999: {
				slidesPerView: 7
			},
			767: {
				slidesPerView: 5
			},
			480: {
				slidesPerView: 4
			},
			320: {
				slidesPerView: 3
			},
		},
	});	

});