let paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++){
   paragraphs[i].innerHTML = formatIsParagraphs(paragraphs[i].innerHTML);
}

function formatIsParagraphs(isText) {
   let isPhrasel = isText.split(' ');
   console.log(isPhrasel);
   if (isPhrasel.length > 10){
      return isPhrasel.slice(0, 10).join(' ') + '...';
   }
   return isText;
}