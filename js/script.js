$(function() {

  // smooth scroll
  var navLinks = $('.nav>li');
  $('.nav a[href*=#]:not([href=#])').click(function() {
    $(navLinks).removeClass('active');
    $(this).parent().addClass('active');

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

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




  // portfolio galery
  $('.filter a').click(function(e) {
    e.preventDefault();
    $(this).css('outline', 'none');
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

  $('.filter a').click(function(e) {
    e.preventDefault();
    console.log(this);
    $(this).parent('li').siblings().removeClass('current');
    $(this).parent('li').addClass('current');
  });


});
