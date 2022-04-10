(() => {
   let isBody = document.querySelector('body');
   isBody.classList.remove('no-js');
   isBody.classList.add('js');

   let isMenu = new MenuMobile({
      container: '.header__nav',
      toggleBtn: '.header__btn_menu',
      widthEnabled: 1024
   });
   let isCarouselImg = new Carousel({
      container: '.section__slider .slider__show',
      items: 'figure',
      isBtnPrev: '.prev',
      isBtnNext: '.next'
   });
})()