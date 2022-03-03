(function () {
   'use strict';
   var $form = document.querySelector('form');
   var $txtUser = document.getElementById('txtUser');
   var $txtPassword = document.getElementById('txtPassword');
   var $button = document.getElementById('formButton');

   $form.addEventListener('submit', (e) => {
      if ($txtUser.value === "" || $txtPassword.value === "") {
         alert('Fill in all fields', 'danger');
         e.preventDefault();
      }
   });
   // console.log();

   var alertPlaceholder = document.getElementById('liveAlertPlaceholder');

   function alert(message, type) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = `
         <div class="alert alert-${type} alert-dismissible" role="alert">
         ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
      `;
      alertPlaceholder.append(wrapper);
   }
})()