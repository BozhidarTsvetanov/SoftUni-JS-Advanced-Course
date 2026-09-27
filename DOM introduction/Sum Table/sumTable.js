function sumTable() {
    let tableRow = document.querySelectorAll('td')
    let total = document.getElementById('sum')
    let totalSum = 0

    for (let index = 0; index < tableRow.length; index++) {

        if (index % 2 === 1) {
            let numbers = tableRow[index].textContent;
            numbers = Number(numbers)
            totalSum += numbers
        }
    }   
    total.textContent = totalSum;
}
