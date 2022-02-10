let nmr = prompt('Typing a number!');
nOne = parseFloat(nmr);

function multi(nOne) {
   let index = 0;

   while (index <= 1000) {
      document.write(`${nOne} x ${index} = ${(nOne * index)} <br/>`);
      if (index % 10 === 0 && index > 0) {
         document.write('<hr/>');
      }
      index = index + 1;
   }
   document.write('Get of out!');
}

multi(nOne);