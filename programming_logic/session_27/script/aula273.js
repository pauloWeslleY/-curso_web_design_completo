/*
   fixme |> AULA 274 ==> List Task
*/
(function () {
   'use strict';

   let ul = document.querySelector('ul');
   let inputTask = document.querySelector('#inputTask');
   let btn = document.querySelector('#btn');

   btn.addEventListener('click', addTask);
   inputTask.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
         addTask();
      };
   });

   function addTask() {
      let task = `<li class="list-group-item">${inputTask.value}</li>`;
      ul.innerHTML += task;
      inputTask.value = "";
      inputTask.focus();
   }
})()




















// end line
console.log('|>-------------------------------------------------<|');
/*
   fixme |> AULA 273 ==> List Task
*/
// (function () {
//    'use strict';

//    let ul = document.querySelector('ul');
//    let inputTask = document.querySelector('#inputTask');
//    let btn = document.querySelector('#btn');

//    btn.addEventListener('click', function () {
//       let task = `<li class="list-group-item">${inputTask.value}</li>`;
//       ul.innerHTML += task;
//       inputTask.value = "";
//       inputTask.focus();
//    });
// })()
