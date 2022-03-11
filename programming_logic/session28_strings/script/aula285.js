(function () {
   window.addEventListener('load', init);
   function init() {
      let phrasel = document.querySelectorAll('p');
      let x = 0;
      while (phrasel[x]) {
         phrasel[x].innerHTML = textFormat(phrasel[x].innerHTML);
         x++;
      }
   }
   function textFormat(text) {
      let maximumNumberCharacters = 50;
      if (text.length <= 200) return text;
      let subText = text.slice(0, 200);
      return `${subText} ...`;
   }
})()