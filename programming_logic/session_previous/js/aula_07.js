let n1 = prompt('Typing a number');
let n2 = prompt('Typing another number');
let nInt = parseFloat(n1);
let nInt2 = parseFloat(n2);

function calc(note1, note2) {
   const media = (note1 + note2) / 2;
   // if (note1 > 0 && note2 > 0 && media >= 5) {
   //    alert('Congratulations approved!');
   // } else {
   //    alert('Sorry you fail!');
   // }

   // resolução do exe usando o operador '||'
   if (note1 === 0 || note2 === 0 || media <= 5) {
      alert('Sorry, it wasnt this time!');
   } else {
      alert('Congratulations you were approved!');
   }
}

calc(nInt, nInt2);
