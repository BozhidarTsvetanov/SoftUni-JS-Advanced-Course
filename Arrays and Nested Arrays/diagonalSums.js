function diagonalSums(input) {
    let main = 0
    let secondary = 0
    for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
        let row = input[rowIndex]
        
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            let element = row[colIndex]
            
            if (rowIndex === colIndex) {
                main += element
            }
            
        }
    }
    
    for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
        let row = input[rowIndex]
        row = row.reverse()
        
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            let element = row[colIndex]
            
            if (rowIndex === colIndex) {
                secondary += element
            }
            
        }
    }
    console.log(`${main} ${secondary}`);
    
}
diagonalSums(
    [[3, 5, 17], 
    [-1, 7, 14], 
    [1, -8, 89]])
