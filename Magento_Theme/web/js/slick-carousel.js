define([
    'jquery',
    'slick',
    'domReady!'
], function ($) {
    'use strict';

    function init(config) {
        initiliseSlickCarousel(config.element);

    }

    function initiliseSlickCarousel(el) {
        $(el).slick({
            arrows: true,
            infinite: true,
            dots: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }

                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }

                }
            ]
        });
    }

    return init;
});