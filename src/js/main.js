//
// global libs
//= ../../bower_components/jquery/dist/jquery.js
//= ../../node_modules/jquery-zoom/jquery.zoom.min.js
//= ../../bower_components/slick-carousel/slick/slick.min.js
/*
* Custom scripts
*/
//= partials/app.js
//

function goodsSlide() {
    $('.js-slide').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        prevArrow:'.js-prev',
        nextArrow:'.js-next'
    });
}

function goodsHandle() {
    $('.js-slide-item').on('click', function() {
        var image = $(this).find('img').attr('src');
        console.log($(this));
        $('.js-slide-item').removeClass('active');
        $(this).addClass('active');
        $('.js-goods-thumb img').attr('src',image);
    });
}

function imageZoom() {
    $('.js-goods-thumb').zoom({
        on:'mouseover'
    });
}

function menuHandler() {
    $('.js-hamburger').on('click',function(){
        $(this).toggleClass('is-active');
        $('.js-header-mobile').slideToggle('fast');
    });
}

function media() {
    var lg = '(max-width: 991px)';
    var inputContainerM = $('.js-mobile-input');
    var inputContainerD = $('.js-desktop-input');
    var cartContainerM = $('.js-mobile-cart');
    var cartContainerD = $('.js-desktop-cart');
    var input = $('.js-input');
    var cart = $('.js-cart');
    var cartWrapper = $('.header__cart-container');
    if(window.matchMedia(lg).matches) {
        $(inputContainerM).append(input);
        $(cartContainerM).append(cart);
        $(cartWrapper).addClass('mobile');
    }
}

function accordion() {
    $('.js-title').on('click',function() {
        var container = $('.js-container');
        var itemNumber = $(this).data('item');
        $('.js-title').removeClass('active');
        $(this).addClass('active');
        container.removeClass('active');
        $('.js-container:eq(' + itemNumber + ')').addClass('active');
    });
}

$(document).ready(function() {
    accordion();
    imageZoom();
    goodsSlide();
    goodsHandle();
    menuHandler();
    media();
});