(function ($) {
    "use strict";
    $(window).on('load', function () {
        $(window).on('scroll', function (event) {
            let scroll = $(window).scrollTop();
            if (scroll < 20) {
                $(".navbar-area").removeClass("sticky");
            } else {
                $(".navbar-area").addClass("sticky");
            }
        });
    });
}(jQuery));