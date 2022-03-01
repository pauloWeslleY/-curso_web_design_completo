/*

   fixme ==> Desafio AULA 258

*/

var people = [
   person1 = {
      name: 'Barry',
      lastName: 'Allen'
   },
   person2 = {
      name: 'Joe',
      lastName: 'West'
   },
   person3 = {
      name: 'Wally',
      lastName: 'West'
   }
]

for (let i = 0; i <= 2; i++) {
   console.log(`${people[i].name} ${people[i].lastName}`);
}

/*

   *
   Resolução do Desafio |> AULA 258
   *

*/
console.log('<== <= === >= ==>');
// line
var person1 = {
   name: 'Iris',
   lastName: 'West'
};
var person2 = {
   name: 'Linda',
   lastName: 'Park'
};
var person3 = {
   name: 'Patty',
   lastName: 'Spivot'
};

var people1 = [
   person1,
   person2,
   person3
]

var x = 0;
while (people1[x]) {
   console.log(`${people1[x].name} ${people1[x].lastName}`);
   x++;
}