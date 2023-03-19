(function ($) {
    "use strict";
    $(window).on('load', function () {
        $(window).on('scroll', function (event) {
            let scroll = $(window).scrollTop();
            if (scroll < 20) {
                $(".navbar").removeClass("navbar-scrolled");
            } else {
                $(".navbar").addClass("navbar-scrolled");
            }
        });
    });
}(jQuery));

$(document).ready(function(){
    $('.customers').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});