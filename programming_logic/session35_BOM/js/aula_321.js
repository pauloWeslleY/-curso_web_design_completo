(() => {
   let isMenu = document.querySelector('.menu');

   const setupNav = () => {
      let isPositionY = getYScroll();
      if (isPositionY > 100 && !hasClassFx()) {
         console.log('add');
         document.body.classList.add('fx');
      }
      if(isPositionY <= 100 && hasClassFx()) {
         console.log('remove');
         document.body.classList.remove('fx');
      }
   }
   const getYScroll = () => {
      return window.pageYOffset;
   }
   const hasClassFx = () => {
      return !!document.querySelector('.fx');
   }
   window.addEventListener('scroll', setupNav);
})();