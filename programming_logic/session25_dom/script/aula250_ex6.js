(function () {
   'use strict';
   let paragraph = document.querySelectorAll('p');
   let x = 0;

   while (paragraph[x]) {
      let name = 'Cisco Ramon';
      paragraph[x].textContent = `
         This page has been changed by ${name} - ${x}
      `;
      x++;
   }
})()