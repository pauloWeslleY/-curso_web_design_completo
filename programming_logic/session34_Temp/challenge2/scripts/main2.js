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
         stopWatch.value = isDiferent;
      }, 100);
   }

   init.addEventListener('click', isInit);
   pause.addEventListener('click', isPause);
   stop.addEventListener('click', isStop);

   // let isSeconds = 0;
   // setInterval(() => {
   //    stopWatch.value = ++isSeconds;
   // }, 1000);
})()