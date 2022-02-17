var message = document.querySelector('#msgText');


function handleClick() {
   var name2 = message.value;
   document.querySelector('#msg').innerHTML = `Welcome, <b>${name2}</b>`;
   console.log(name2);
}