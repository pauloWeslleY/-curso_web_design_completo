(() => {
   let banner = document.querySelector('.banner');
   let btnBanner = document.querySelector('.close__banner');

   let isIntervalHide = null;

   const showBanner = () => {
      banner.style.display = 'block';
      isIntervalHide = setTimeout(closeBanner, 3000);
   }
   const closeBanner = () => {
      btnBanner.removeEventListener('click', closeBanner);
      banner.parentNode.removeChild(banner);
      clearTimeout(isIntervalHide);
   }
   btnBanner.addEventListener('click', closeBanner);
   setTimeout(showBanner, 3000);
})();