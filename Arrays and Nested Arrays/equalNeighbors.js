function equalNeighbors(input) {
    let sumOfNeinors = 0;
    for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
        let row = input[rowIndex]
        
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            
            if (rowIndex + 1 < input.length) {
                if (input[rowIndex][colIndex] === input[rowIndex + 1][colIndex]) {
                sumOfNeinors++
            }
            }

            if (colIndex + 1 < row.length) {
                if (input[rowIndex][colIndex] === input[rowIndex][colIndex + 1]) {
                sumOfNeinors++
                }
            }

        }
    }
    console.log(sumOfNeinors);
    
}
equalNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']])
