/*
   fixme |> AULA 274 ==> List Task
*/
(function () {
   'use strict';

   let ul = document.querySelector('ul');
   let lis = document.querySelectorAll('li');
   let inputTask = document.querySelector('#inputTask');
   let btn = document.querySelector('#btn');

   btn.addEventListener('click', addTask);
   inputTask.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
         addTask();
      };
   });

   ul.addEventListener('click', function (e) {
      if (e.target.nodeName === 'LI') {
         removeTask(e.target);
      }
   })

   function removeTask(li) {
      if (confirm(`Really want to delete ${li.textContent}?`)) {
         console.log(li.parentNode);
         li.parentNode.removeChild(li);
      }
   }

   function addTask() {
      let li = document.createElement('li');
      li.classList.add('list-group-item');
      let text = document.createTextNode(inputTask.value);
      li.appendChild(text);
      ul.appendChild(li);

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
