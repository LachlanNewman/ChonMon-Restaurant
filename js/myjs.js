$(function () {
    $('.nav').on('click', function () {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });
});