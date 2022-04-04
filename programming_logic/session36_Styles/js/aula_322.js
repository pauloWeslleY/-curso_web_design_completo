let test = document.querySelector('.test');
console.log(`background: ${test.style.background}`);
console.log('pc: ', getComputedStyle(test));

let isParagraph = document.querySelector('p');
console.log(isParagraph.offsetHeight, isParagraph.offsetWidth);

let test2 = document.querySelector('.test2');
console.log(test2.offsetTop, test2.offsetLeft);

// console.log(test.getBoundingClientReact());



