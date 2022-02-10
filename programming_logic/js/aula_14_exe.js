let nmr = prompt('What a number');
nmr = parseFloat(nmr);

function initCalc(symbol) {
   let nOne = document.querySelector('#output').textContent;
   nOne = parseFloat(nOne);
   let nTwo = prompt('Typing another number!');
   nTwo = parseFloat(nTwo);
   try {
      var msg = calc(symbol, nOne, nTwo);
   } catch (e) {
      alert(e);
      return;
   }
   writeMessage(msg);
}

const writeMessage = (message) => {
   let output = document.querySelector('#output');
   output.innerHTML = message;
}

writeMessage(nmr);

function calc(symbol, nmr1, nmr2) {
   console.log(symbol);

   if (symbol !== '+' && symbol !== '-' && symbol !== '*' && symbol !== '/') {
      throw new Error('Enter a valid symbol!');
   }

   if (isNaN(nmr1) || isNaN(nmr2)) {
      throw new Error('Only number!');
   }

   let numberCalc = null;

   switch (symbol) {
      case '+':
         numberCalc = nmr1 + nmr2;
         break;
      case '-':
         numberCalc = nmr1 - nmr2;
         break;
      case '*':
         numberCalc = nmr1 * nmr2;
         break;
      case '/':
         numberCalc = nmr1 / nmr2;
   }
   return numberCalc;
}
