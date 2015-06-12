$(function () {
    $('main img').css('border', '3px solid green');

    $('main img')
        .on('mouseenter', function () {
            $(this).css('border', '7px solid red');
        })
        .on('mouseleave', function () {
            $(this).css('border', '3px solid green');
        });
});