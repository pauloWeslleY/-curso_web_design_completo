/*
   ! |> Desafio
*/

(function () {
   window.addEventListener('load', init);

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

   function init() {
      let average = calcAverage(3.45, 2.86, 5.478, 6.84750);
      alert(average);
   }
})()