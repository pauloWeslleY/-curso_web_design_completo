let $d1 = document.querySelector('#d1');
let $d1Span = document.querySelector('#d1 span');

$d1.addEventListener('click', function () {
   console.log('click of D1');
});

$d1Span.addEventListener('click', function () {
   console.log('click of d1Span');
});

document.addEventListener('click', (event) => {
   console.log('Click in Document!');
});

