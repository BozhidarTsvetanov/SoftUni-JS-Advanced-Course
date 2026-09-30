function validate() {
    let textBox = document.getElementById('email')
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g
    
    textBox.addEventListener('change', validateEmail)

    function validateEmail(event) {
        let match = textBox.value.match(pattern)
        if (match) {
            event.target.className = ''

        }else{
            event.target.className = 'error'
        }
    }
    
}
