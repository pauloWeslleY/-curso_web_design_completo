(function() {
   const name = prompt('What your name?');
   document.querySelector('#message').innerHTML = `Welcome, <b>${name}</b>`;
})()