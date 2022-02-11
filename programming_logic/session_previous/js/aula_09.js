let nmr = prompt('Typing a number!');
nOne = parseFloat(nmr);

function multi(nOne) {
   let index = 1;

   while (index <= 1000) {
      document.write(`${nOne} x ${index} = ${(nOne * index)} <br>`);
      index = index + 1;
   }
   document.write('Get of out!');
}

const calculator = (nOne) => {
   for (let index = 1; index <= 100; index++) {
      document.write(`${nOne} x ${index} = ${(nOne * index)} <br>`);
   }
   console.log('Get for loop!!!');
}


// multi(nOne);
calculator(nOne);