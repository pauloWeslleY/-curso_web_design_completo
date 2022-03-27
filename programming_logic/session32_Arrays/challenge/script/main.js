let paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++){
   let haveJS = paragraphs[i].textContent.toLowerCase().indexOf('javascript') >= 0;
   paragraphs[i].className = haveJS ? 'destach' : '';
}

