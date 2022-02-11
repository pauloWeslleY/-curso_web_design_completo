let n1 = prompt('Typing a number');
let n2 = prompt('Typing another number');
let nInt = parseFloat(n1);
let nInt2 = parseFloat(n2);

function calc(nmr, nmr1) {
   const media = (nmr + nmr1) / 2;
   if (media >= 5) {
      alert(`is correct ${media}`);
   } else {
      alert(`is fail ${media}`);
   }
}

calc(nInt, nInt2);
