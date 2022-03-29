/*
   ? Aula 302 ==> Date & Methods

   getDay(), getFullYear(), getHours(), getMilliseconds(),
   getMinutes(), getMonth(), getSeconds(), getTime(),
   setDate(), setDay(), e todos os set acima
*/

var myData = new Date();
//Line
console.log('|>----------------------<|');

console.log(myData.getDay());
console.log(myData.getDate());
console.log(myData.getMonth());
console.log(myData.getYear());
console.log(myData.getFullYear());
console.log(myData.getHours());
console.log(myData.getMinutes());
console.log(myData.getSeconds());
console.log(myData.getTime());
console.log(+new Date());
console.log(myData.setTime(0));
console.log(myData);
console.log('|>----------------------<|');
console.log('setDate =>', myData.setDate(23));
console.log(myData);
console.log('setMonth =>', myData.setMonth(1));
console.log(myData);
console.log('setYear =>', myData.setYear(1970));
console.log(myData);
console.log('getTime =>', myData.getTime());
console.log('setDate =>', myData.setDate(23));
console.log('setMonth =>', myData.setMonth(11));
console.log('setYear =>', myData.setYear(2017));
console.log(myData);
console.log('ssetHours', myData.setHours(0));
console.log('ssetHours', myData.setMinutes(0));
console.log('ssetHours', myData.setMilliseconds(0));
console.log(myData);
const dataCurrent = new Date(0);
console.log(`
   ${dataCurrent}
   ${myData}
`);

myData = new Date(2022, 02, 29);
console.log(myData);
myData = new Date(2022, 11, 13, 15, 44, 30, 500);
console.log(myData);
console.log(myData.getMilliseconds());
myData = new Date('2022/03/29');
console.log(myData);