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

var Pen = (function (window) {
   'use strict';
   console.log(this);
   function _pen(price, color2) {
      // private
      var colorY = color2 || 'black';
      // public
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
   return _pen;
})(window)

