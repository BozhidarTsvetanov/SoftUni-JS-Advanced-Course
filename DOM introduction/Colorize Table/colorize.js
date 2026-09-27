function colorize() {
    let tBody = document.querySelector('tBody')
    let tableRow = document.querySelectorAll('tr')

    for (let index = 0; index < tableRow.length; index++) {
        if (index % 2 === 1) {
             tableRow[index].style.backgroundColor = 'teal';
        }     
        
    }

}
