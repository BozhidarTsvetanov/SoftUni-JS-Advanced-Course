function addItem() {
    let items = document.getElementById('items')
    let text = document.getElementById('newItemText')
    let item = document.createElement('li')

    item.textContent = text.value

    items.appendChild(item)
    text.value = ''
}
