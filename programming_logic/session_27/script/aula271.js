/*
   NOTE:
   fixme |> Aula 271
   NOTE:
*/

(() => {
   'use strict'

   let btn = document.getElementById('button');
   let check = document.getElementById('check');
   toggleBtn();

   check.addEventListener('change', function() {
      toggleBtn();
   });

   function toggleBtn() {
      btn.disabled = !check.checked;
   }

})()