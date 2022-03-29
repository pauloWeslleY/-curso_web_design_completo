/*
   ! Aula 306 |> Temporizadores
   setTimeout(fn, ms),
   setInterval(fn, ms),
   claerTimeout(id),
   clearInterval(id),
*/

let n = 0;

const isSome = () => {
   console.log('n', ++n);
   if (n >= 10) {
      clearInterval(isInteval);
   }
}

let isTimeout = setTimeout(isSome, 1000);
alert('isTimeout', isTimeout);
let isInteval = setInterval(isSome, 1000);
console.log('isInteval', isInteval);

let isStr = '';
let isDoc = document.querySelector("div");
let isTimeoutTest = setTimeout(() => {
   for (let i = 0; i < 1000; i++) {
      // isCapture += `i: ${i} --`;
      isStr += 'i: ' + i + ' -- YOU WRONG!';
      isDoc.textContent += isStr;
   }
}, 3000);


