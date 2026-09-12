function negativePositiveNumbers(input) {
    
    let sortedArray = []

    for (let number of input) {
        
        if (number >= 0) {
            sortedArray.push(number)

        }else{
            sortedArray.unshift(number)
        }
    }

    for (let number of sortedArray) {
        console.log(number);
        
    }

}
negativePositiveNumbers([7, -2, 8, 9])
