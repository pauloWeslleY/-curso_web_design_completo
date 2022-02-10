let product = [
   {  'name': 'pen', 'price': 1.5 },
   {  'name': 'pencil', 'price': 2 },
   {  'name': 'rubber', 'price': 0.5 }
];

let message = '';
for (let i = 0; i < product.length; i++) {
   console.log(product[i].price);

   message += `<h2>Product: ${product[i].name}</h2>`;
   message += `<p>price: R$ ${product[i].price}</p> <hr/>`;
}

document.querySelector('#output').innerHTML = message;