/*
   *
   ! ==> AULA 232 >= exercicio
   *
*/

(function () {
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
   var mediaOne = calcMedia(2, 3);
   var mediaTwo = calcMedia(4, 0, 10, 10);
   console.log(`media one: ${mediaOne}`);
   console.log(`media one: ${mediaTwo}`);
})();
console.log('<== <= === >= ==>');
/*
   *
   todo ==> Exercicio >= 02
   *
*/

(function () {
   function calcIMC(weight, height) {
      const imc = weight / (height * height);
      return imc.toFixed(2);
   }

   let mediaIMC = calcIMC(62, 1.60);
   let imc = parseFloat(mediaIMC)
   console.log(imc);

   function receivedIMC(mediaIMC) {
      if (mediaIMC <= 18.4) {
         return `very underweight`;
      } else if(mediaIMC <= 24.9) {
         return `normal weight`;
      } else if (mediaIMC >= 25) {
         return `overweight`;
      }
   }
   const getIMC = receivedIMC(mediaIMC);
   console.log(`you IMC is ${imc} and you are ${getIMC}`);
})()

console.log('<== <= === >= ==>');
/*
   *
   todo ==> Resolução do Exercicio >= 02
   *
*/

(function () {
   function calculatorIMC(w, h, callback) {
      let imc = w / (h * h);
      if (callback && typeof callback === 'function') {
         return callback(imc);
      }
      console.log('not passed callback!');
      return imc;
   }

   function classIMC(imc) {
      if (imc <= 16.9 ) {
         return 'very underweight';
      } else if (imc <= 18.4) {
         return 'under weight';
      } else if (imc <= 24.9) {
         return 'normal weight';
      } else if (imc <= 29.9) {
         return 'normal weight';
      } else if (imc <= 34.9) {
         return 'obesity grade 1';
      } else if (imc <= 40) {
         return 'obesity grade 2';
      } else {
         return 'obesity grade 3';
      }
   }

   let weight = 65;
   let height = 1.75;
   let imc = calculatorIMC(weight, height);
   console.log(imc);
   // let classification = classIMC(imc);
   console.log(`classification IMC: ${imc}`);
})()