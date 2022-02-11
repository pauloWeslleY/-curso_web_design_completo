let nm1 = prompt('Number of player 1');
let nOne = parseInt(nm1);
let nm2 = prompt('Number of player 2');
let nTwo = parseInt(nm2);

const prizeDraw = (nPlayer1, nPlayer2) => {

   if (nPlayer1 === nPlayer2) {
      alert('tie here!');
   } else {
      let raffling = parseInt(Math.random() * 2);
      alert(`raffling: ${raffling}`);
      if (raffling === 0 && nPlayer1 < nPlayer2 || raffling === 1 && nPlayer1 > nPlayer2) {
         alert('Player 1 win!');
      } else {
         alert('Player 2 win!');
      }

      // if (raffling === 0) {
      //    if (nPlayer1 < nPlayer2) {
      //       alert('Player 1 win!');
      //    } else {
      //       alert('Player 2 win!');
      //    }
      // } else {
      //    if (nPlayer2 > nPlayer1) {
      //       alert('Player 1 win!');
      //    } else {
      //       alert('Player 2 win!');
      //    }
      // }
   }
}

prizeDraw(nOne, nTwo);