function isMenuMobile (config){
   this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
   this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;
   this.maxWidth = config.widthEnabled || false;
   let _isOpened = false;
   let _this = this;
   this.btn.removeAttribute('style');

   const isApplyStyle = (_isStyle) => {
      Object.keys(_isStyle).forEach(isStl => {
         _this.nav.style[isStl] = _isStyle[isStl];
         // _this.nav.style.maxHeight = 'calc(100vh - 50px)';
         // _this.nav.style.overflow = 'hidden';
      });
   }
   const isCloseMenu = () => {
      let _isStyle = {
         maxHeight: '0px',
         overflow: 'hidden'
      }
      isApplyStyle(_isStyle);
      _isOpened = false;
   }
   const isOpenOrClose = () => {
      if (!_isOpened) {
         isOpenMenu()
      } else {
         isCloseMenu()
      }
   }
   this.btn.addEventListener('click', isOpenOrClose);
   if (this.maxWidth) {
      window.addEventListener('resize', e => {
         if (window.innerWidth > _this.maxWidth) {
            _this.nav.removeAttribute('style');
            _isOpened = true;
         } else if (!this.nav.getAttribute('style')) {
            isCloseMenu();
         }
      })
      if (window.innerWidth <= _this.maxWidth) {
         isCloseMenu();
      }
   }
   const isOpenMenu = () => {
      let _isTop = this.nav.getBoundingClientRect().top + 'px'
      let _isStyle = {
         maxHeight: `calc(100vh - ${_isTop})`,
         overflow: 'hidden'
      }
      isApplyStyle(_isStyle);
      _isOpened = true;
   }
}