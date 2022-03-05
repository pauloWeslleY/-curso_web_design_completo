(function () {
   'use strict';

   let maximum = 100;

   let $txtMsg = document.getElementById('message');
   let $rest = document.getElementById('rest');
   $txtMsg.addEventListener('input', checkLength);
   $rest.textContent = maximum;

   function checkLength(e) {
      let nmrLetterTyping = this.value.length;
      $rest.textContent = maximum - nmrLetterTyping;
   }
})()