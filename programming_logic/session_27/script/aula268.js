(function () {
   'use strict';

   let $restRow = document.getElementById('restRow');
   let $txtMsg = document.getElementById('message');
   let $rest = document.getElementById('rest');
   let maximum = $txtMsg.maxLength;

   $restRow.style.display = 'block';
   $rest.textContent = maximum;
   $txtMsg.addEventListener('input', checkLength);

   function checkLength(event) {
      let nmrLetterTyping = this.value.length;
      $rest.textContent = maximum - nmrLetterTyping;
   }
})()