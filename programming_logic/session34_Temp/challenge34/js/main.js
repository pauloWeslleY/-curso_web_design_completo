(() => {
   let clock = document.querySelector('.clock');
   const createClock = () => {
      let data = new Date();
      let isHours = formatHours(data.getHours());
      let isMinutes = formatHours(data.getMinutes());
      let isSeconds = formatHours(data.getSeconds());

      return `${isHours}:${isMinutes}:${isSeconds}`;
   }
   const formatHours = (isTemp) => {
      return isTemp < 10 ? '0' + isTemp : isTemp;
   }
   const showClock = (current) => {
      clock.textContent = current;
   }
   showClock(createClock());
   setInterval(() => {
      showClock(createClock());
   }, 1000);
})();