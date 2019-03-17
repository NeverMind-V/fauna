//
// global libs
//= ../../bower_components/jquery/dist/jquery.js
/*
* Custom scripts
*/
//= partials/app.js
//
$(document).ready(function() {
    $('.js-title').on('click',function() {
        var container = $('.js-container');
        var itemNumber = $(this).data('item');
        $('.js-title').removeClass('active');
        $(this).addClass('active');
        container.removeClass('active');
        $('.js-container:eq(' + itemNumber + ')').addClass('active');
    });
});