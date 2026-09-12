function  processOddPositions(input) {
    
    let oddPositions = []

    for (let index = 0; index < input.length; index++) {
         let nums = (input[index]) * 2
        
        if (index % 2 === 1) {
            oddPositions.push(nums)
        }

    }

    let sortedArray = oddPositions.reverse()
    return sortedArray;

}
processOddPositions([3, 0, 10, 4, 7, 3])
