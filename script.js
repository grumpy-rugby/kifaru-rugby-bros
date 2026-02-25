(function ($) {

    'use strict';

    $(document).ready(function () {

        /* ========================================
           01. BROWSER AGENT FUNCTIONS
        ======================================== */

        var isChromeMobile = function () {
            if (device.tablet() || device.mobile()) {
                if (window.navigator.userAgent.indexOf("Chrome") > 0 ||
                    window.navigator.userAgent.indexOf("CriOS") > 0) {
                    return true;
                }
            }
            return false;
        };

        var isIOS = function () {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent);
        };

        var isFirefox = function () {
            return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        };

        var isIE = function () {
            return window.navigator.userAgent.indexOf("MSIE ") > 0 ||
                !!navigator.userAgent.match(/Trident\/7\./);
        };

        /* ========================================
           02. PRELOADER
        ======================================== */

        if (typeof Pace !== "undefined") {
            Pace.on('done', function () {
                $('#page-preloader').fadeOut(500);
            });
        }

        /* ========================================
           03. MENU SYSTEM
        ======================================== */

        $("#menu-icon").on("click", function (e) {
            e.preventDefault();
            $("#navigation-window")
                .addClass("open animated bounceInRight");
        });

        $("#closemenu").on("click", function (e) {
            e.preventDefault();

            $("#navigation-window")
                .removeClass("bounceInRight")
                .addClass("bounceOutRight");

            setTimeout(function () {
                $("#navigation-window")
                    .removeClass("open animated bounceOutRight");
            }, 800);
        });

        /* ========================================
           04. OWL CAROUSEL
        ======================================== */

        if ($.fn.owlCarousel) {
            $(".owl-carousel").owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: false,
                dots: false
            });
        }

        /* ========================================
           05. TOUCH FIX
        ======================================== */

        $('.photo-item').on("touchstart touchend", function () { });
        $('a').on("touchstart touchend", function () { });

        /* ========================================
           06. PREMIUM STAT ANIMATION
        ======================================== */

        function animateStats(section) {

            var fills = section.find('.stat-fill');

            fills.each(function (index) {

                var $this = $(this);
                var targetWidth = $this.data('width');

                $this.css({
                    width: '0%',
                    transition: 'none'
                });

                setTimeout(function () {
                    $this.css({
                        width: targetWidth,
                        transition: 'width 1.5s cubic-bezier(.17,.67,.83,.67)'
                    });
                }, 200 + (index * 150)); // stagger effect

            });
        }

        /* ========================================
           07. PROFILE SWITCHING
        ======================================== */

        $('.tab-btn').on('click', function () {

            var target = $(this).data('target');
            if (!target) return;

            $('.profile-section').removeClass('active-profile');
            $('.tab-btn').removeClass('active');

            var activeSection = $('#' + target);
            activeSection.addClass('active-profile');
            $(this).addClass('active');

            animateStats(activeSection);
        });

        /* ========================================
           08. ANIMATE DEFAULT ACTIVE PROFILE
        ======================================== */

        if ($('.active-profile').length) {
            animateStats($('.active-profile'));
        }

    });

})(jQuery);