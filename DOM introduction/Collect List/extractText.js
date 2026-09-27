function extractText() {
    let list = document.getElementById('items');
    let textarea = document.getElementById('result');

    let items = list.querySelectorAll('li')
    for (let item of items) {
        textarea.value += item.textContent + '\n'
    }
}
