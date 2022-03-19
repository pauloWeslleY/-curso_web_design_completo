/*
   !|> Aula 291 ==> About Arrays and Props

   ? length, every(), filter(), forEach(), indexOf(), lastIndexOf(), map(), some(), concat(), join(), pop(), push(), reduce() e reduceRight(), reverse(), shift(), slice(), splice(), unshift(), toString()

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
