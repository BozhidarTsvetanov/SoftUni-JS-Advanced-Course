function attachGradientEvents() {
    let gradient = document.getElementById('gradient')
    let result = document.getElementById('result')

    gradient.addEventListener('mousemove',mauseOver)
    gradient.addEventListener('mouseout',mouseOut)

    function mauseOver(event) {
        result.textContent = Math.floor(event.offsetX / 300 * 100) + '%'
        
        
    }
    function mouseOut() {
        result.textContent = ''
    }
}
