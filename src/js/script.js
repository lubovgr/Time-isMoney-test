$(function(){
  var initSliders = function() {
    var mainSlider =  new Swiper('.main-slider-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: 8000,
      slideClass: 'main-slider-slide',
      nextButton: '.swiper-next',
      prevButton: '.swiper-prev'
    });
  }
  initSliders();
  $('.buy-now').on('mouseenter', function(ev) {
    $(ev.target).closest('.plans-item').addClass('active');
  });
  $('.buy-now').on('mouseleave', function(ev) {
    $(ev.target).closest('.plans-item').removeClass('active');
  });

  $('.nav-toggle-btn').on('click', function() {
    $(this).parent().toggleClass('open');
    $(this).find('.open-menu').toggleClass('open');
  });
});