let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn2.onclick = handle_Click;
function handle_Click() {
   alert('Click!');
   return function () {
      alert('Click2!');
   }
}

btn3.addEventListener('click', function () {
   alert('handleClick');
});

btn3.addEventListener('click', function () {
   alert('handleClick for 2 times');
});

btn3.onclick = function () {
   alert('Hello World!');
}

btn3.onclick = function () {
   alert('Click here!');
}