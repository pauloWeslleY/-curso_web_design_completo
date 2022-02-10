let output = document.querySelector('#output');
let message = '';
for (let i = 0; i < 1001; i++) {
   message += `i: ${i} <br/>`;
}

output.innerHTML = message;