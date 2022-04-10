(() => {
   let isBody = document.querySelector('body');
   isBody.classList.remove('no-js');
   isBody.classList.add('js');

   // let isBtnMenu = document.querySelector('.header__btn_menu');
   // isBtnMenu.removeAttribute('style');

   let isMenu = new isMenuMobile({
      container: '.header__nav',
      toggleBtn: '.header__btn_menu',
      widthEnabled: 1014
   })
})()