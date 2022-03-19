(function () {
   window.addEventListener('load', init);

   function init() {
      let n = luckGood(5) + 1;

      document.querySelector('body').style.background = `url(images/${n}.jpg)`
   }
})()