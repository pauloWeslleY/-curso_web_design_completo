let names = 'Doctor Harrison Wells';
let nameFormat = formatName(names);

function formatName(name) {
   // return 'The, Flash';
   let positionLastSpace = name.lastIndexOf(' ');
   if (positionLastSpace <= 0) {
      return name;
   }
   let lastName = name.slice(positionLastSpace + 1);
   console.log(`${lastName}, lastName`);
   let firstName = name.slice(0, positionLastSpace);
   console.log(`${positionLastSpace}, positionLastSpace`);
   return `${lastName}, ${firstName}`;
}

console.log(nameFormat);
