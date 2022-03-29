(function () {
   let currentData = new Date();
   currentData.setHours(0);
   currentData.setMinutes(0);
   currentData.setSeconds(0);
   currentData.setMilliseconds(0);
   let yearCurrent = currentData.getFullYear();

   let dataBirth = new Date(yearCurrent, 11, 13);

   let dataCurrentTs = currentData.getTime();
   let dataBirthTs = dataBirth.getTime();
   if (dataBirthTs === dataCurrentTs) {
      alert('Happy Birth!');
      return;
   }
   if (dataBirthTs < dataCurrentTs) {
      dataBirth.setFullYear(++yearCurrent);
      dataBirthTs = dataBirth.getTime();
   }

   const ONE_DAY_TS = 24 * 60 * 60 * 1000;
   let different = dataBirthTs - dataCurrentTs;
   console.log(different / ONE_DAY_TS);
})();