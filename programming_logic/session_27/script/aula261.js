let $d1 = document.querySelector('#d1');
let $d1Span = document.querySelector('#d1 span');

$d1.addEventListener('click', function (e) {
   console.log('click of D1');
   e.stopPropagation();
}, false);

$d1Span.addEventListener('click', function () {
   console.log('click of d1Span');
}, false);

document.addEventListener('click', (event) => {
   console.log('Click in Here document');
   console.log(event.currentTarget);
   console.log(this);
   console.log(event.target);
}, false);

