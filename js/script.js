import * as bootstrap from './bootstrap/bootstrap.js';
window.bootstrap = bootstrap;

jQuery(window).on("load", function () {
    jQuery('#preloader').fadeOut('fast');
});
jQuery(document).ready(function () {
    jQuery('.menutoggle').click(function () {
        jQuery('.sidenav, .navbar-collapse, .menutoggle').toggleClass('show');
    });
});

// var mainslider = document.querySelector('#mainslider')
// var carousel = new bootstrap.Carousel(mainslider, {
//     interval: 4500,
//     pause: false,
// });
jQuery(function () {
    var mission_src = "./assets/images/mission-bdr.png";
    var vision_src = "./assets/images/vision-bdr.png";
    var m_l = "./assets/images/mission-1.png";
    var v_l = "./assets/images/vision-1.png";
    jQuery(".mission").on({
        mouseenter: function () {
            jQuery(".mission>img").attr('src', mission_src);
        },
        mouseleave: function () {
            jQuery(".mission>img").attr('src', m_l);
        }
    });
    jQuery(".vision").on({
        mouseenter: function () {
            jQuery(".vision>img").attr("src", vision_src);
        },
        mouseleave: function () {
            jQuery(".vision>img").attr("src", v_l);
        }
    });

    jQuery(".owlcate").owlCarousel({
        loop: true,
        nav: false,
        loop: true,
        margin: 28,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>",
        ],
        responsive: { 0: { items: 1 }, 768: { items: 2 } },
    });
    jQuery(".owlproduct").owlCarousel({
        loop: true,
        nav: false,
        loop: true,
        margin: 28,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>",
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
        },
    });
    jQuery(".whyslider").owlCarousel({
        loop: true,
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>",
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 1, touchDrag: true, mouseDrag: true },
            1200: { items: 2, touchDrag: true, mouseDrag: true },
            1700: { items: 3, touchDrag: false, mouseDrag: false },
        },
    });
    jQuery(".yearslider").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autorplay: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>",
        ],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1600: { items: 5, touchDrag: true, mouseDrag: true },
            1800: { items: 6, touchDrag: false, mouseDrag: false },
        },
    });
});