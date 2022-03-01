let btn2 = document.getElementById('btn2');

btn2.onclick = handle_Click();
function handle_Click() {
   alert('Click!');
   return function () {
      alert('Click2!');
   }
}