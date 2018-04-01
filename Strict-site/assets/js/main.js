$(document).ready(function() {
    $('.anim-block').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200,
        callbackFunction: function(elem, action){},
    });

    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        loop:true,
        pagination:true,

    });
    $('.fact__counter--like').animationCounter({
        start: 0,
        end: 150,
        step: 1,
        delay: 50
    });
    $('.fact__counter--code').animationCounter({
        start: 0,
        end: 42,
        delay: 180
    });
    $('.fact__counter--time').animationCounter({
        start: 0,
        end: 100,
        delay: 70
    });
    $('.fact__counter--coffee').animationCounter({
        start: 0,
        end: 46,
        delay: 90
    });

});