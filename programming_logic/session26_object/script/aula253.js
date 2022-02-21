/*
   *
   ! ==> AULA 253 |> Operador new
   *
*/
let today = new Date();

let x = [0];
function changeArr(x) {
   let y = x;
   y.push(2);
   y.push(3);
}

changeArr(x);

console.log('<== <= === >= ==>');
// line

let n = 0;
function changeN(n) {
   let n2 = n;
   console.log(++n2);
}

changeN(n);
console.log(n);

console.log('<== <= === >= ==>');
// line
/*
   *
   fixme ==> AULA 254 |> Objetos Customizados
   *
*/
function changedColor(colorX) {
   console.log(this);
   this.color = colorX;
}

let pen = {
   color: 'red',
   changeColor: changedColor
}

let pen1 = {
   color: 'blue',
   changeColor: changedColor
}

pen.changeColor('black');
console.log(pen);
console.log(pen1);