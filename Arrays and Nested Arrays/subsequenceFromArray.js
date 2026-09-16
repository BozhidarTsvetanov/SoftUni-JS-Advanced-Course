function subsequenceFromArray(input) {
    let array = []
    let biggestNum = input[0]

    for (let index = 0; index < input.length; index++) {
        const element = input[index];

        if (element >= biggestNum) {
            array.push(element)
            biggestNum = element

        }

    }
    return array;
}
subsequenceFromArray([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]
)
