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



   /*
      ? Resolução Challenge |> Aula 305
   */
   //line
   console.log('==>----------------------<==');

   let date = new Date();
   date.setDate(2);
   date.setMonth(2);

   function formateDate(date) {
      let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      let month = date.getMonth() + 1;
      month = month < 10 ? '0' + month : month;
      let year = date.getFullYear();
      return `${day}/${month}/${year}`;
      // return day + '/' + month + '/' + date.getFullYear();
      // return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`
   }

   console.log(formateDate(date));

   console.log('==>----------------------<==');
})();

const dateCurrent = new Date();

const formatData = () => {
   return dateCurrent.toLocaleDateString(
      'pt-br',
      {
         day: '2-digit',
         month: '2-digit',
         year: 'numeric'
      }
   )
}

console.log(formatData());


