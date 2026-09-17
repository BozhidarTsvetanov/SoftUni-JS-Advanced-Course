function magicMatrices(input) {

let neededSum = 0
let firstArr = input[0]

for (const element of firstArr) {
    neededSum += element
}

for (let row = 0; row < input.length; row++) {
    let element = input[row];
    let sumOfRow = 0

    for (let col = 0; col < element.length; col++) {
        let element1 = element[col];
        sumOfRow += element1 
    }
    if (neededSum !== sumOfRow) {
        return false; 

    }
}
for (let col = 0; col < input[0].length; col++) {
    let sumOfColumn = 0;

    for (let row = 0; row < input.length; row++) {
        sumOfColumn += input[row][col];
    }

    if (neededSum !== sumOfColumn) {
        return false; 

    }
    
}
return true;

}
magicMatrices(
[[4, 5, 6],
 [6, 5, 4],
 [5, 5, 50]]
)
