// TODO: AULA 168 TODO: =/=

// var name = prompt('Whats your name???');
// alert(`Your Welcome, ${name}`);

var itsTrue = true // boolean
var address = 1.2 // number real or decimal

// TODO: AULA 167 TODO: =/=

let nmr1 = prompt('Digite um numero');
let nmr2 = prompt('Digite outro numbero');

//show calc
// function calc(nmr1, nmr2) {
//    let somar = parseFloat(nmr1) / parseFloat(nmr2);
//    alert(somar);
// }

// calc(number1, number2);


//! NOTE: exercicio ===!===
let nmrInt = parseInt(nmr1);
let nmrInt2 = parseInt(nmr2);

const somar = (nmrInt, nmrInt2) => {
   let sub = nmrInt - nmrInt2;
   alert(`A subtração é: ${sub}`);
}

somar(nmrInt, nmrInt2);

let multi = (nmrInt * nmrInt2);
alert(`A multiple is: ${multi}`);
