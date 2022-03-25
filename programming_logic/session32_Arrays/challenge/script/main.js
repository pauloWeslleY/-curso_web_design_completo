var paragraphs = document.querySelectorAll('p');

for (var i = 0; i < paragraphs.length; i++){
   paragraphs[i].innerHTML = formatIsParagraphs(paragraphs[i].innerHTML);
}

function formatIsParagraphs(isText) {
   var isPhrasel = isText.split(' ');
   console.log(isPhrasel);
   if (isPhrasel.length > 102){
      return isPhrasel.slice(0, 102).join(' ') + '...';
   }
   return isText;
}