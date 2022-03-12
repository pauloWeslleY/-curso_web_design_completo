/*
   fixme ==> Function calcIMC
*/

export default function calcAverage() {
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
