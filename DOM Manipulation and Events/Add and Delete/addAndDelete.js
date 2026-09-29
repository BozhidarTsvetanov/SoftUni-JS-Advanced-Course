function addItem() {
    let items = document.getElementById('items')
    let text = document.getElementById('newItemText')
    let item = document.createElement('li')

    item.textContent = text.value

    items.appendChild(item)
    text.value = ''

    let deleteItem = document.createElement('a')
    deleteItem.href = '#'
    deleteItem.textContent = '[Delete]'
    item.appendChild(deleteItem)

    deleteItem.addEventListener('click', onclick)

    function onclick() {
        item.remove()
    }

}
