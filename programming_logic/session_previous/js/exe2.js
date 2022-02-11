// * user typing a number!!!
let n1 = prompt('Typing a number!');
let n2 = prompt('Typing another number!');

// * converting string for number
let nmrInt = parseInt(n1);
let nmrInt2 = parseInt(n2);

const calculator = (nmr1, nmr2) => {
   let res = (nmr1 % nmr2);
   alert(
      `The rest division ${nmrInt} for ${nmrInt2} result is ${res}`
   );
}

calculator(nmrInt, nmrInt2);

const somar = (nmrInt ** nmrInt2);
alert(`The number ${nmrInt} high ${nmrInt2} is: ${somar}`);
alert(`The number ${nmrInt} multi ${nmrInt2} is: ${(nmrInt * nmrInt2)}`);
