/*

   ! |> Aula 288 ==> Object Math

   * Possui Métodos que nos auxiliam ao trabalhar com valores numéricos.
   * Alguns deles: min(), max(), round(), floor(), ceil(), pow(), sqrt(), cbrt(), random()

*/


console.log(Math.min(2,3,4,31,154));
console.log(Math.max(2,3,4,31,154));
console.log(Math.round(55.5));
console.log(Math.round(55.49));
console.log(Math.floor(55.9999999));
console.log(Math.ceil(55.01));
console.log(Math.pow(2 ,3));
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
console.log(Math.cbrt(8));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.SQRT2);

console.log('|>----------------------<|');

const showMeNumber = () => {
   const nmr = Math.random();
   return nmr;
}
console.log(showMeNumber())