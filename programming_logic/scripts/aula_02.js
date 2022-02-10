function myFnc(x, y) {
   // corpo da função
   return x + y;
}

var calcFnc = myFnc(10, 20);
console.log(`The result: ${calcFnc}`);

myFnc.test = 'property function';

console.log(myFnc.test);

let test = function(fnc) {
   // console.log(`Test ${name}`);
   fnc();
};

test(function () {
   console.log('function params!');
});

console.log("<=______________________________________________>=");

var x = 0;
var y;

function showX(){
   var x = 10; // escopo global!
   var y = 20;
   console.log(`show X inside: ${x}`);
   console.log(`show Y inside: ${y}`);
}

showX();
console.log(`show X out: ${x}`);
console.log(`show Y out: ${y}`);

// IFEE
(function(){
   var isValid = false;
})()

console.log(isValid);

