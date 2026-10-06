function subSum(array, startIndex, endIndex) {
    let sum = 0
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0
    }

    if (endIndex >= array.length) {
        endIndex = array.length - 1
    }

    for (let index = startIndex; index <= endIndex; index++) {
        let element = Number(array[index])
        sum += element

    }
    return sum;
    
}
subSum([10, 20, 30, 40, 50, 60], 3, 300) //150
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 ) //3.3
subSum([10, 'twenty', 30, 40], 0, 2 ) //NaN
subSum([], 1, 2 ) //0
console.log(subSum('text', 0, 2 )) //NaN
