let nameProd = [
   {
      "name": "pen",
      "price": 1.6,
      "stock": 1000
   },
   {
      "name": "pencil",
      "price": 3,
      "stock": 500
   },
   {
      "name": "rubber",
      "price": 2,
      "stock": 300
   }
]

// console.log(nameProd);
console.log('_____________________________________________________________');

let product = new Object();
product.name = 'pen';
product.price = 2.2;
product.stock = 10;
product.buy = function (qtd) {
   if (!qtd) {
      qtd = 1;
   }
   console.log('buy a pen');
   // this.stock--;
   this.stock = this.stock - qtd;
   console.log(this.stock);
}

let message = '';
message += `name: ${product.name} <br/>`;
message += `price: ${product.price} <br/>`;
message += `stock: ${product.stock} <br/>`;

const output = document.querySelector('#output');
output.innerHTML = message;


