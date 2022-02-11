var names = ['Mary', 'Barr'];

var product = {
   'name': 'pen',
   'price': 1.1
}

console.log(product.name);
console.log(product.price);

var prod = [product, { 'name': 'pencil', 'price': 2.5 }];
console.log(prod);


console.log(names[0]);
console.log(prod[0]);
console.log(prod[0].name);
console.log(prod[0].price);