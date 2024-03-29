import $ from 'jquery';
import 'what-input';

import slick from 'slick-carousel';
// import objectFitImages from 'object-fit-images';
// import Stickyfill from 'stickyfilljs';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

//object fit polyfill for our cover images
// var $objectFitImages = $('.object-fit-cover');
// objectFitImages($objectFitImages);

//sticky polyfill
// var $soSticky = $('.sticky-element');
// Stickyfill.add($soSticky);
$(function(){

  // Slick slider
  $('.safety-slider').slick({
    "dots": true,
    "arrows": false,
    "appendDots": ".safety-slider-nav",
    "dotsClass": "safety-slider-dots",
    "autoplay": true,
    "lazyLoad": 'progressive'
  });

  // Slick slider
  $('.our-values-image-slider').slick({
    "dots": true,
    "arrows": false,
    "appendDots": ".values-slider-nav",
    "dotsClass": "values-slider-dots",
    "autoplay": true,
    "lazyLoad": 'progressive'
  });


  $('.mobile-nav').on('toggled.zf.responsiveToggle', function() {
    $('#main-menu').toggleClass('is-active');
    if( $('.top-bar').is(':hidden') ) {
      $('.main-menu-hamburger').removeClass('is-active');
    }
  });

  $('.main-menu-hamburger').on('click', function() {
    $(this).toggleClass('is-active');
  });

  $(window).on('changed.zf.mediaquery', function() {
    $('.main-menu-hamburger').removeClass('is-active');
  });

  $('.top-bar-right .menu a').on('click', function(){
    setTimeout(function() {
      $('.main-menu-hamburger').trigger('click');
    }, 100);
  });

  //Fix the paperform loading issue by making the apply links just trigger the main nav one
  $('.apply-link').on('click', function(){
    $(this).preventDefault;
    $('#mainNavApply').trigger('click');
  });


  $(window).on('load resize', function() {
    //Reflow Magellan
    function magcalc() {
      $('#mainNavMenu').foundation('reflow');
    }
    setTimeout(magcalc, 300);
  });

  $('#hpContactForm').submit(function(e) {
    e.preventDefault();

    var $hpForm = $(this),
        $hpFormButton = $('.hp-contact-form-submit'),
        $hpFormSuccess = $('.hp-thankyou');

    $.post($hpForm.attr('action'), $hpForm.serialize()).then(function() {

      $hpForm.trigger('reset');
      $hpFormSuccess.fadeIn(250);
      $hpFormButton.attr('disabled', true);

    });
  });

  //form stuff
  // $('.conditional-check').on('click', function(){
  //   if($(this).is(":checked")) {
  //     $(this).parent().children(".hidden-label").show();
  //   }
  //   else if($(this).is(":not(:checked)")) {
  //     $(this).parent().children(".hidden-label").hide();
  //   }
  // });

  // $('#applicationForm').submit(function(e) {
  //   e.preventDefault();

  //   var $appForm = $(this),
  //       $appFormButton = $('.app-submit-button'),
  //       $appFormSuccess = $('.app-thankyou');

  //   $.post($appForm.attr('action'), $appForm.serialize()).then(function() {

  //     $appForm.trigger('reset');
  //     $appFormSuccess.fadeIn(250);
  //     $appFormButton.attr('disabled', true);

  //   });
  // });

});

