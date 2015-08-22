/*
Author:       Danko Milutinovic
Desctiption:  functions for http://danko-m.github.io/sample-01/
Contact:      dankomilutinovic@gmail.com, 
              https://rs.linkedin.com/pub/danko-milutinovic/a3/675/778, 
              http://danko-m.github.io/ 
Design:       https://www.behance.net/gallery/12966101/Molly-Creative-PSD-Template
*/

$(function() {

  // smooth scroll
  var $navLinks = $('.nav a[href*=#]:not([href=#])');
  $navLinks.click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // normalize carousel height
  setCarouselHeight('#carousel-main');

  function setCarouselHeight(id) {
    var slideHeight = [];
    $(id + ' .item').each(function() {
      // add all slide heights to an array
      slideHeight.push($(this).height());
    });

    // find the tallest item
    var max = Math.max.apply(null, slideHeight);

    // set the slide's height
    $(id + ' .carousel-content').each(function() {
      $(this).css('height', max + 'px');
    });
  }


  // portfolio galery
  $('.filter a').click(function(e) {
    e.preventDefault();
    $(this).parents('li').siblings().removeClass('current');
    $(this).parent('li').addClass('current');

    var filterVal = $(this).text().toLowerCase().replace(' ', '-');
    var itemsLength = $('.portfolio-items li:visible').length;
    $('.portfolio-items li:visible').each(function(i) {
      $(this).fadeOut('fast', function() {
        if (itemsLength === ++i) {
          show(filterVal);
        }
      });
    });
    return false;

  });

  function show(filterVal) {
    if (filterVal === 'all') {
      $('.portfolio-items li').fadeIn('fast');
    } else {
      $('.portfolio-items li').each(function() {
        if ($(this).hasClass(filterVal)) {
          $(this).fadeIn('fast');
        }
      });
    }
  }


  // smooth scrolling on mouse wheel
  jQuery.scrollSpeed(200, 1500);

});
