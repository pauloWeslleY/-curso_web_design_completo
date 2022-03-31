(() => {
   let stopWatch = document.querySelector('#stopWatch');
   let init = document.querySelector('#init');
   let stop = document.querySelector('#stop');
   let pause = document.querySelector('#pause');

   let timeStampInitial = 0;

   const isInit = () => {
      timeStampInitial = Date.now();
      initialStopWatch();
   }
   const isPause = () => {

   }
   const isStop = () => {

   }

   const initialStopWatch = () => {
      setInterval(() => {
         let timeStampNow = Date.now();
         let isDiferent = timeStampNow - timeStampInitial;
         stopWatch.value = formatIsTimeStamp(isDiferent);
      }, 100);
   }
   const formatIsTimeStamp = (timeStamp) => {
      /*
         ms = 900 => 900
         ms = 1500 => 1:500
         ms = 59000 => 59:000
         ms = 61500 => 1:1:500
      */

      if (timeStamp < 1000) {
         return timeStamp;
      } else if (timeStamp < 60000) {
         let second = timeStamp / 1000;
         second = parseInt(second);
         let hundredth = timeStamp - (second * 1000);
         return `${second}:${hundredth}`;
      } else {
         let isMinutes = timeStamp / (60000);
         isMinutes = parseInt(isMinutes); // 1minute
         let second = timeStamp / 1000 - (isMinutes * 60); // 61.5 = 1.5
         second = parseInt(second); // 1
         let hundredth = timeStamp - (second * 1000) - (isMinutes * 60 * 1000);
         return `${isMinutes}:${second}:${hundredth}`;
      }
   }

   init.addEventListener('click', isInit);
   pause.addEventListener('click', isPause);
   stop.addEventListener('click', isStop);

   // let isSeconds = 0;
   // setInterval(() => {
   //    stopWatch.value = ++isSeconds;
   // }, 1000);
})()