function smallestTwoNumbers(input) {
    
    let sortedArray = input.sort((a, b) => a - b)
     sortedArray = sortedArray.slice(0, 2)

    console.log(sortedArray.join(' '));
    

}
smallestTwoNumbers([30, 15, 50, 5])
