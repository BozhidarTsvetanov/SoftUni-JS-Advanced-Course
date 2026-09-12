function evenPositionElement(input) {

    let evenPositions = []
    for (let index = 0; index < input.length; index++) {
         let nums = input[index]
        
        if (index % 2 === 0) {
            evenPositions.push(nums)
        }
    }

    console.log(evenPositions.join(' '));
    
}
evenPositionElement(['20', '30', '40',
'50', '60'])
