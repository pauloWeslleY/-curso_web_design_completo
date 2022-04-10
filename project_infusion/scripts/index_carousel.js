function Carousel(config) {
   this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
   this.items = (typeof config.items === 'string') ? this.container.querySelectorAll(config.items) : config.items;
   this.isBtnPrev = (typeof config.isBtnPrev === 'string') ? this.container.querySelector(config.isBtnPrev) : config.isBtnPrev;
   this.isBtnNext = (typeof config.isBtnNext === 'string') ? this.container.querySelector(config.isBtnNext) : config.isBtnNext;

   let _this = this;
   let _currentSlide = 0;

   const showSlide = () => {
      let isQuantity = _this.items.length;
      let isSlider = _currentSlide % isQuantity;
      isSlider = Math.abs(isSlider);
      _this.container.querySelector('.show').classList.remove('show');
      _this.items[isSlider].classList.add('show');
   }
   const showNextSlide = () => {
      _currentSlide++;
      showSlide();
   }
   const showPrevSlide = () => {
      _currentSlide--;
      showSlide();
   }
   const isAddListen = () => {
      _this.isBtnNext.addEventListener('click', showNextSlide);
      _this.isBtnPrev.addEventListener('click', showPrevSlide);
   }
   const init = () => {
      let _show = _this.container.querySelectorAll('.show');
      Array.prototype.forEach.call(_show, (isShown) => {
         isShown.classList.remove('show');
      });
      _this.items[0].classList.add('show');
      _this.isBtnNext.removeAttribute('style');
      _this.isBtnPrev.removeAttribute('style');

      isAddListen();
   }
   init();
}