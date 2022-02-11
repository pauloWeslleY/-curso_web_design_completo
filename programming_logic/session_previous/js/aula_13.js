function showTable() {
   let numberQuestion = prompt('What a number!');
   clearTable();
   let number = parseFloat(numberQuestion);
   let index = 1;
   while (index <= 1000) {
      // message += number + ' x ' + index + ' = ' + (number * index) + '<br/>';
      message += `${number} x ${index} = ${(number + index)} <br/>`;
      index++;
   }
   output.innerHTML = message;
}

function clearTable() {
   message = '';
   output.innerHTML = message;
}

let output = document.querySelector('#output');
let message = '';