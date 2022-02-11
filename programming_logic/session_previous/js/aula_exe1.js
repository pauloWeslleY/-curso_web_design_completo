const premier = [
   { 'team': 'Man Utd', 'city': 'Manchester' },
   { 'team': 'Chelsea', 'city': 'Londres' },
   { 'team': 'Liverpool', 'city': 'Liverpool' },
   { 'team': 'Aston Villa', 'city': 'Birmingham' }
]

let message = "";
function showTeam() {
   for (i = 0; i < premier.length; i++){
      message += `<h1>Team: ${premier[i].team}</h1>`
      message += `<p>City: ${premier[i].city}</p>`
   }
}
showTeam();

const output = document.querySelector('#output');
output.innerHTML = message;