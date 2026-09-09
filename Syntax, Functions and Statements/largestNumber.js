function largestNumber(num1, num2, num3) {
    let largestNum = num1

    if (largestNum < num2) {
        largestNum = num2
    }

    if (largestNum < num3) {
        largestNum = num3
    }
    
    console.log(`The largest number is ${largestNum}.`);
    
}
largestNumber(5, -3, 16)
