/*
   !TODO: |> AULA 272
*/

(function () {
   'use strict';

   let btns = document.getElementsByTagName('button');
   for (let i = 0; i < btns.length; i++){
      btns[i].addEventListener('click', handleClicked);
   }

   function handleClicked() {
      console.log(this.textContent);
   }

})()