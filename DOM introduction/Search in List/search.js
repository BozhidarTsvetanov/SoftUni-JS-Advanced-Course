function search() {
    let result = document.getElementById('result');
    let towns = document.querySelectorAll('li');
    let text = document.getElementById('searchText').value;

    towns = Array.from(towns);

    let matches = 0;

    for (let element of towns) {
        element.style.fontWeight = '';
        element.style.textDecoration = '';
    }

    for (let element of towns) {

        if (element.textContent.includes(text)) {
            element.style.fontWeight = 'bold';
            element.style.textDecoration = 'underline';

            matches++;
        }
    }

    result.textContent = `${matches} matches found`;
}
