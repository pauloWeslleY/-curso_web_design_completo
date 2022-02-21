/*
   *
   fixme ==> AULA 255 |> Objects ||
   *
*/
// line
// Ecmascript 6
// class PenEC {
//    price = 1;
//    color = 'black';

//    constructor(price, color) {
//       price = price;
//       color = color;
//    }

//    changeColor(colorX) {
//       this.color = colorX;
//    }
// }
// const pen1 = new PenEC();
// line
console.log('<== <= === >= ==>');

function Pen(price, color2) {
   var colorY = color2 || 'black';
   this.price = price || 1;
   this.changeColor = function (colorX) {
      if (colorX !== 'red' && colorX !== 'blue' && colorX !==  'black') {
         return;
      }
      colorY = colorX;
   }
   this.takeColor = function(){
      return colorY;
   }
}

const penOne = new Pen(3.5, 'red');