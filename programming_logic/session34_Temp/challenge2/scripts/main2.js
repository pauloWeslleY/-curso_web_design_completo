(() => {
   let stopWatch = document.querySelector('#stopWatch');
   let init = document.querySelector('#init');
   let stop = document.querySelector('#stop');
   let pause = document.querySelector('#pause');

   let isInterval = null;
   let isTimeStampInitial = 0;
   let isClickPause = 0;
   let isRunning = false;
   let isRunTime = 0;

   const isInitial = () => {
      if (isRunning) return;
      isStop();
      isTimeStampInitial = Date.now();
      initialStopWatch();
      isRunning = true;
   }
   const isPause = () => {
      if (!stopWatch.value);
      if (isRunning) {
         clearInterval(isInterval);
         isClickPause = Date.now();
         isRunTime += (isClickPause - isTimeStampInitial);
      } else {
         isTimeStampInitial = Date.now();
         initialStopWatch(isRunTime);
      }
      isRunning = !isRunning;
   }
   const isStop = () => {
      isClickPause = 0;
      isTimeStampInitial = 0;
      isRunTime = 0;
      isRunning = false;
      clearInterval(isInterval);
      stopWatch.value = '';
   }
   const initialStopWatch = (timeisRunning) => {
      let _isTime = timeisRunning || 0;
      isInterval = setInterval(() => {
         let timeStampNow = Date.now();
         let isDiferent = timeStampNow - isTimeStampInitial;
         stopWatch.value = formatIsTimeStamp(isDiferent + _isTime);
      }, 100);
   }
   const formatIsTimeStamp = (isMilliSecond) => {
      const ONE_MINUTES = 60 * 1000;

      if (isMilliSecond < 1000) {
         return isMilliSecond;
      } else if (isMilliSecond < ONE_MINUTES) {
         let isSecond = isMilliSecond / 1000;
         isSecond = parseInt(isSecond);
         let isHundredth = isMilliSecond - (isSecond * 1000);
         return `${isSecond}:${isHundredth}`;
      } else {
         let isMinutes = isMilliSecond / (ONE_MINUTES);
         isMinutes = parseInt(isMinutes); // 1minute
         return `${isMinutes}:${formatIsTimeStamp(isMilliSecond - isMinutes * ONE_MINUTES)}`;
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