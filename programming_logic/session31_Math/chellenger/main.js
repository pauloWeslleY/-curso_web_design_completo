/*
   fixme ==> Function calcAverage
*/

function calcAverage() {
   var all = 0;
   var qtd = arguments.length;
   var x = 0;
   // while(arguments[x]){}
   while (typeof arguments[x] === 'number') {
      all += arguments[x];
      x++;
   }
   return (all / qtd).toFixed(2);
}

function luckGood(number1){
   let _n = number1 || 1;
   let nDratf = Math.random();
   nDratf = nDratf * _n;
   nDratf = Math.floor(nDratf);
   return nDratf;
}
