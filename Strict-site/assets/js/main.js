$(document).ready(function() {
    $(".content").children().addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });
    $(".services").children().addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });
    $(".portfolio").children().addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });
    $(".submit").children().addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });
});