let n = prompt('Typing a number!');
let nOne = parseInt(n);

switch (nOne) {
   case 1:
      alert('Good choose!');
      break;
   case 2:
      alert('Good one!');
      console.log("igual!");
      break;
   case 3:
      alert('Sorry');
      break;

   default:
      alert('Choose of One a Three');
      break;
}