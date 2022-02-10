const prod1 = [];
const prod = new Array('pen', 'pencil', 'notebook', 'book', 'rubber', 'scissors');
prod.push('card', 'compass');

let message = '';

for (let i = 0; i < prod.length; i++) {
   message += 'prod ' + (i + 1) + ': ' + prod[i] + '<br/>';
}
let output = document.querySelector('#output');
output.innerHTML = message;
