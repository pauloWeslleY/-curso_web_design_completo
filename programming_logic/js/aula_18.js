var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturay');

let today = new Date();
let dayWeek = today.getDay();
console.log(today);
console.log(dayWeek);

alert(`Welcome, today is ${days[dayWeek]}`);