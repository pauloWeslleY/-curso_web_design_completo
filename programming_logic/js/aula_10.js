let number = prompt('Typing a number!');
let numberInt = parseFloat(number);

function loopInf(numberInt) {
   for (let i = 1; i <= 1000; i++){
      document.write(`${numberInt} x ${i} = ${(numberInt * i)} <br>`);
   }
   console.log('Get out of loop');
}

loopInf(numberInt);