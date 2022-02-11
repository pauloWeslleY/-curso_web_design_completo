// ! User typing a number
let nmr1 = prompt('Type it a number!');
let nmr2 = prompt('Type it more a number!');

// ! converting string for number
let numberInt = parseFloat(nmr1);
let numberInt2 = parseFloat(nmr2);

// ! show media
const calc = (number1, number2) => {
   let add = (number1 + number2) / 2;
   alert(`The final average is: ${add} !`);
};

calc(numberInt, numberInt2);