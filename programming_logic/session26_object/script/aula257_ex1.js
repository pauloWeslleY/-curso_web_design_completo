var person1 = {
   name: 'Barry',
   lastName: 'Allen'
};
var person2 = {
   name: 'Joe',
   lastName: 'West'
};
var person3 = {
   name: 'Wally',
   lastName: 'West'
};

// console.log(`${person1.name} ${person1.lastName}`);

for (let i = 1; i <= 3; i++) {
   // console.log(window['person'+i].name + ' ' + window['person'+i].lastName);
   console.log(`${window['person'+i].name} ${window['person'+i].lastName}`);
}