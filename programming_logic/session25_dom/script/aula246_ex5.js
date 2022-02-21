/*
   *
   fixme |> AULA 247 <|
   ! >= exe 5 DOM
   *
*/

function calcMedia() {
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
   var trs = document.querySelectorAll('.js-table tbody .students');
   var x = 0;
   while (trs[x]) {
      var lineStudents = trs[x];
      console.log(lineStudents);
      var n1, n2, n3, n4, average;
      var tds = lineStudents.querySelectorAll('td');
      console.log(tds);
      n1 = takeNote(tds[1]);
      n2 = takeNote(tds[2]);
      n3 = takeNote(tds[3]);
      n4 = takeNote(tds[4]);
      average = calcMedia(n1, n2, n3, n4);
      lineStudents.querySelector('.students-m').textContent = average;
      x++;
   }

   function takeNote(td) {
      return parseFloat(td.textContent);
   }
})()