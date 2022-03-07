/*
   fixme |> AULA 273 ==> List Task
*/

(function () {
   'use strict';

   let ul = document.querySelector('ul');
   let inputTask = document.querySelector('#inputTask');
   let btn = document.querySelector('#btn');

   btn.addEventListener('click', function () {
      let task = `<li class="list-group-item">${inputTask.value}</li>`;
      ul.innerHTML += task;
      inputTask.value = "";
      inputTask.focus();
   });
})()