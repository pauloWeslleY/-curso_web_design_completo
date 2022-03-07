(function () {
   'use strict';

   let $txtMsg = document.getElementById('message');
   let $restRow = document.getElementById('restRow');
   let $rest = document.getElementById('rest');
   let maximum = $txtMsg.maxLength;

   showContainer();
   showLeft(maximum);
   $txtMsg.addEventListener('input', checkLength);

   function showContainer() {
      $restRow.style.display = 'block';
   }

   function checkLength(event) {
      let nmrLetterTyping = this.value.length;
      let calc = parseInt(maximum) - parseInt(nmrLetterTyping);
      let missingCharacter = calc;
      showLeft(missingCharacter);
   }

   function showLeft(e) {
      $rest.textContent = e;
   }
})()