let arr = new Array(1, 2, 3, 4, 5, 7, 9, 10);

let index = 0;
function somar(arr) {
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (!isNaN(arr[i]) && arr[i] % 2 === 0) {
         index += arr[i];
      }
   }
}

somar(arr);

const output = document.querySelector('#output');
output.innerHTML = `To add the even numbers is: ${index}`;