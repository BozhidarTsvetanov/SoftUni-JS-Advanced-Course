function biggerHalf(input) {
    
    let sortedArray = input.sort((a, b) => a - b)
    let half = Math.floor(sortedArray.length / 2)
    let halfArray = sortedArray.slice(half, sortedArray.length)

    return halfArray
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])
