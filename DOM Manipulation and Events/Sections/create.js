function create(words) {
   let content = document.getElementById('content')

   words.forEach(word => {
      let divs = document.createElement('div')
      let paragraph = document.createElement('p')
      paragraph.textContent = word
      paragraph.style.display = 'none'
      divs.appendChild(paragraph)
      divs.addEventListener('click', whenClicked)
      content.appendChild(divs)
   });
   
   function whenClicked(event) {
      event.currentTarget.querySelector('p').style.display = 'block'
   }
   
}
