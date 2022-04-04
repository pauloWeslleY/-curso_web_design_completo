(() => {
   let isNav = document.querySelector('.nav');
   let isLinks = document.querySelectorAll('li a');
   const isMenuDestach = () => {
      let isPosition = [];
      for (let i = 0; i < isLinks.length; i++){
         isPosition[i] = getYPosScroll(isLinks[i]);
      }
      console.log(isPosition);

      let isCurrentLink = getLastLinkVisible(isPosition);
      let isLinkActived = isNav.querySelector('.actived');
      if(isLinkActived) isLinkActived.classList.remove('actived');
      isCurrentLink.classList.add('actived');
   }
   const getYPosScroll = (isLinks) => {
      let isTarget = document.querySelector(isLinks.getAttribute('href'));
      let isPosYViewPort = isTarget.getBoundingClientRect().top;
      return isPosYViewPort;
   }
   const getLastLinkVisible = (isPosition) => {
      let isQuantity = isPosition.length;
      while (isQuantity) {
         isQuantity--;
         if (isPosition[isQuantity] < innerHeight / 2) {
            return isLinks[isQuantity];
         }
      }
      return isLinks[0];
   }
   isMenuDestach();
   window.addEventListener('scroll', isMenuDestach);
})();