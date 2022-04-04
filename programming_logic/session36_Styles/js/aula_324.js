(() => {
   const isSaltTest = () => {
      for (let i = 0; i < 10;i++){
         if (i === 5) {
            // return 'Something!';
            continue;
         }
         console.log(i);
      }
      console.log('end of loop');
      return 'end of function';
   }
   const isTest = isSaltTest();
   console.log(isTest);

   let isN = 10;
   switch (isN) {
      case 0:
         console.log('switch 0');
         break;
      case 10:
         console.log('switch 10');
         break;
      case 20:
         console.log('switch 20');
         break;
      case 30:
         console.log('switch 30');
         break;
      default:
         console.log('switch default');
   }
})();