/*
   !|> Aula 291 ==> About Arrays and Props

   ? length, every(), filter(), forEach(), indexOf(), lastIndexOf(), map(), some(), concat(), join(), pop(), push(), reduce()
   ? e reduceRight(), reverse(), shift(), slice(), splice(), unshift(), toString()

*/

let arr = ['1', 20, 3, 4, 5, 'hello', 20, '30'];

let isEvery = arr.every(function (el) {
   return typeof el === 'number';
});
console.log(isEvery);

let isBigEnough = arr.some(function (element) {
   return typeof element === 'number';
});
console.log(isBigEnough);

let isNumber = arr.filter(function (isEl, isIndex, arr) {
   return typeof isEl === 'number';
});
console.log(isNumber);

let isFor = arr.forEach(function (isElement, isIndexOne, arr) {
   console.log(`isEl => ${isElement} | isIndex => ${isIndexOne} | array => ${arr.toString()}`);
});

let posisitonStr1 = arr.indexOf(20, 5);
console.log(posisitonStr1, 'posisitonStr1');
let posisitonStr2 = arr.lastIndexOf(20, 5);
console.log(posisitonStr2, 'posisitonStr2');

console.log(isNumber);
isNumber = isNumber.map(function (isEl, isInd, arr) {
   return isEl * isInd;
});
console.log(isNumber);

let arr2 = arr.concat(isNumber, 'Hello', 'WorldCup', 2015);
console.log(arr2);

let isJoin = arr2.join(' => ');
console.log(isJoin);
let isJoin2 = arr2.toString();
console.log(isJoin2);

/*
   ! |> Aula 293 Métodos part3
*/

arr.push('new', 'Item');
console.log(arr);

let lastItem = arr.pop();
console.log(lastItem);
console.log(arr);

let firstItem = arr.shift();
console.log(typeof firstItem);
console.log(arr);

arr.unshift(true, false, 'unshift');
console.log(arr);

/*
   ! |> Aula 294 Métodos part4
*/

isNumber.shift();
let isCalc = isNumber.reduce(function (previous, current, iNdex) {
   console.log('previous', previous, '| current', current, '| iNdex', iNdex );
   return previous + current + iNdex;
}, 1);
console.log(isNumber);
console.log(isCalc);

let isArr = ['1', '2', '3', '4', '5'].reduceRight((isInitial, isCurent) => {
   return isInitial + isCurent;
});
console.log(isArr);

let isArr2 = [10, 20, 30];
isArr2.reverse();
console.log(isArr2);

/*
   ? |> Aula 295 Métodos part5
*/

console.log(arr2.slice(2, 5));

console.log('|>----------------------<|');
console.log(arr2);
let arr3 = arr2.splice(2, 3, 'lemon', 'orange');
console.log(arr2);
console.log(arr3);
