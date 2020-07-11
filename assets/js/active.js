/* ===================================================================
    Author          : KeenDevs
    Template Name   : VRLanding - Virtual Reality HTML Template
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {


    $(window).on('load', function() {
        // Animate loader off screen
        $(".pre-loader").delay(500).fadeOut();
    });


    /*========================================
     # Home Page One - Case Study Carousel 
     ========================================*/  

    $('.case-study-carousel-wrap').slick({
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 2,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
        ]        
    });    

    /*========================================
     # Home Page One - Testimonial Carousel 
     ========================================*/ 

    $('.testimonial-items-list').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<i class="far fa-chevron-left"></i>',
        nextArrow: '<i class="far fa-chevron-right"></i>',
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              centerMode: false
            }
          }
        ]
    });    

    $('.testimonial-carousel').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<i class="fal fa-arrow-left"></i>',
        nextArrow: '<i class="fal fa-arrow-right"></i>',
    });    

    /*========================================
     # Home Page One - VR Carousel 
     ========================================*/ 

    $('.vr-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000        
    });    


    /*========================================
     # Brand Carousel - Home Page Three 
     ========================================*/ 

    $('.brand-carousel-active').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
            }
          }
        ]        
    });    

    
    /* =============================================
        # Magnific popup init
     ===============================================*/
    $(".popup-link").magnificPopup({
        type: 'image',
    });

    $(".popup-gallery").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        // other options
    });

    $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*==================================
     # Meanmenu Active - Mobile Menu 
     ==================================*/
    $('#responsive-menu').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "991"
    });


    /*==========================
       Scroll To Up Init
    ============================*/
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '1110', // Distance from top before showing element (px)
      topSpeed: 2000, // Speed back to top (ms)
      animation: 'slide', // Fade, slide, none
      animationInSpeed: 300, // Animation in speed (ms)
      animationOutSpeed: 300, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });



    //# Smooth Scroll
    $('#responsive-menu a').on('click', function(event) {
        var $anchor = $(this);
        var headerH = '85';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });


    // Sticky Menu
    $(window).scroll(function(){
      var Width = $(document).width();

        if($("body").scrollTop() > 100 || $("html").scrollTop() > 100 ) {
          if (Width > 767 ) {
            $("header").addClass("sticky");
          }
        } else {
            $("header").removeClass("sticky");
        }
    });


    AOS.init({
        disable: 'mobile'
    }); 


    }); // end document ready function
})(jQuery); // End jQuery

