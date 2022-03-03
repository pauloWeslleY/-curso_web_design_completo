var $ul = document.querySelector('ul');
var $lis = document.querySelectorAll('li');

// $lis[0].addEventListener('click', (e) => {
//    console.log('click in here!');
//    e.stopPropagation();
// });

// var x = 0;
// while ($lis[x]) {
//    $lis[x].addEventListener('click', (e) => {
//       e.stopPropagation();
//       console.log('click in here <li>');
//    });
//    x++;
// }

$ul.addEventListener('click', (e) => {
   e.stopPropagation();
   console.log(this);
   console.log(e.currentTarget);
   console.log(e.target);

   console.log(e.target.nodeName);
   if (e.target.nodeName === 'LI') {
      alert('click in LI');
   }
});