function showAreaAlert() {
   let width = prompt('Typing a width!');
   width = parseFloat(width);
   let height = prompt('Typing a height');
   height = parseFloat(height);

   try {
      var area = calcArea(width, height);
   } catch (e) {
      area = e;
   }
   alert(`The total area is ${area}!`);
}

function showAreaOutput() {
   let width = prompt('Typing a width!');
   width = parseFloat(width);
   let height = prompt('Typing a height');
   height = parseFloat(height);

   try {
      var area = calcArea(width, height);
   } catch (e) {
      area = e;
   }
   const output = document.querySelector('#output');
   output.innerHTML = `The total area is ${area}`;
}

showAreaAlert();

function calcArea(vw, vh) {
   if (vh === undefined || vh === undefined) {
      throw new Error('Area must receive two values!');
   }
   if (isNaN(vw) || isNaN(vh)) {
      throw new Error('Only number!');
   }
   let calc = (vw * vh);
   return calc;
}