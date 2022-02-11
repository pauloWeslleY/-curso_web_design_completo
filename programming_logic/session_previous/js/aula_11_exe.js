// let nmr = prompt('Typing a number!');
// nOne = parseFloat(nmr);

// function
function yearsAll() {
   let year = 1004;
   while (year <= 2017) {
      if (!(year % 100 === 0) || (year % 400 === 0)) {
         document.write(`Ano Bissextos: ${year} <br/>`);
      } else {
         document.write(`Ano não Bissextos: ${year} <hr/>`);
      }
      year += 4;
   }
   console.log("Get");
}

yearsAll();