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
   debugger
   let n2 = n;
   console.log(++n2);
}

changeN(n);
console.log(n);