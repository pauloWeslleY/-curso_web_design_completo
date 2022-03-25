/*
   fixme |> AULA 247 <|
   ! >= exe 5 DOM
*/

function calcAverage() {
   var all = 0;
   var args = arguments.length;
   var x = 0;
   // while(arguments[x]){}
   while (typeof arguments[x] === 'number') {
      all += arguments[x];
      x++;
   }
   return all / args;
}

console.log('<== <= === >= ==>');
// Line

(function () {
   'use strict';
   var trs = document.querySelectorAll('.js-table tbody .students');
   var x = 0;
   while (trs[x]) {
      var lineStudents = trs[x];
      var tds = lineStudents.querySelectorAll('td');
      var notes = recoveryNumbers(tds);

      // var haveZero = notes.some(function (isNote) {
      //    return isNote === 0;
      // });
      // ?New Feature
      var haveZero = notes.some(isNote => isNote === 0);
      var messages = haveZero ? 'reproved' : calcAverage.apply(this, notes);
      lineStudents.querySelector('.students-m').textContent = messages;
      x++;
   }

   function recoveryNumbers(tds) {
      var x = 0;
      var arr = [];
      while (tds[x]) {
         if ( !isNaN(tds[x].textContent) && tds[x].textContent !== '' ) {
            arr.push(parseFloat(tds[x].textContent));
         }
         x++;
      }
      return arr;
   }
})()