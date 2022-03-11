/*
   fixme |> Aula 286 ==> Number

   * Métodos e props
   ? MAX_VALUE, MIN_VALUE, toFixed(), toPrecision(), toString(), e toExponential()
*/

let n = new Number('10');
console.log(n);

let str = new String('test');
console.log(str);
console.log(str.length);
console.log(n.MAX_VALUE);
console.log(Number.MAX_VALUE);
console.log('|>----------------------<|');
console.log(Number.MIN_VALUE);

n = 12345.6789;
console.log('|>----------------------<|');
console.log(n.toFixed(10));
console.log(n.toPrecision(5));
n = 12.345;
console.log(n.toPrecision(3));
console.log(n.toPrecision(8));
n = 12;
console.log(n.toPrecision(8));
console.log(n.toString());
console.log(n.toString(2));
n = 16;
console.log(n.toString(16));
console.log((15).toString(16));
console.log((10).toExponential());
console.log((100).toExponential(2));
console.log((123456.789).toExponential(2));
