function subtract() {
    let firstNum = document.getElementById('firstNumber')
    firstNum = Number(firstNum.value)

    secondNum = document.getElementById('secondNumber')
    secondNum = Number(secondNum.value)

    let result = document.getElementById('result')
    result.textContent = (firstNum - secondNum)
}
