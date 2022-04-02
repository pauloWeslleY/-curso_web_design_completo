(() => {
   let stopWatch = document.querySelector('#stopWatch');
   let init = document.querySelector('#init');
   let stop = document.querySelector('#stop');
   let pause = document.querySelector('#pause');

   let isInterval = null;
   let timeStampInitial = 0;
   let isClickPause = 0;
   let running = false;
   let runTime = 0;

   const isInitial = () => {
      timeStampInitial = Date.now();
      initialStopWatch();
      running = true;
   }
   const isPause = () => {
      if (running) {
         running = false;
         clearInterval(isInterval);
         isClickPause = Date.now();
         runTime += (isClickPause - timeStampInitial);
      } else {
         running = true;
         timeStampInitial = Date.now();
         initialStopWatch(runTime);
      }
   }
   const isStop = () => {
      isClickPause = 0;
      timeStampInitial = 0;
      runTime = 0;
      running = false;
      clearInterval(isInterval);
      stopWatch.value = '';
   }
   const initialStopWatch = (timeRunning) => {
      let _isTime = timeRunning || 0;
      isInterval = setInterval(() => {
         let timeStampNow = Date.now();
         let isDiferent = timeStampNow - timeStampInitial;
         stopWatch.value = formatIsTimeStamp(isDiferent + _isTime);
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

   init.addEventListener('click', isInitial);
   pause.addEventListener('click', isPause);
   stop.addEventListener('click', isStop);

   // let isSeconds = 0;
   // setInterval(() => {
   //    stopWatch.value = ++isSeconds;
   // }, 1000);
})()