/*global $, jQuery, alert*/
$(function(){
    'use strict';
    //Adjust Slider Height
    var winHeight       = $(window).height(),
        upperBarHeight  = $(".upper-bar").innerHeight(),
        navBarHeight    = $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(winHeight - (upperBarHeight + navBarHeight));
    // Featured work Shuffle
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all'){
            $('.shuffle .col-sm-6').css('opacity', '1');
        }else{
            $('.shuffle .col-sm-6').css('opacity', '.2');
            $($(this).data('class')).parent().css('opacity', '1');
        };
    });
    // Carousel Control Active
    $('.testimonials a .carousel-control-prev-icon').on('click', function(){
    $(this).addClass('active');
    $('.testimonials a .carousel-control-next-icon').removeClass('active');
    });
    
    $('.testimonials a .carousel-control-next-icon').on('click', function(){
    $(this).addClass('active');
    $('.testimonials a .carousel-control-prev-icon').removeClass('active');
    });
});