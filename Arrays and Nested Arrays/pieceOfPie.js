function pieceOfPie(input, startFlavors, endFlavors) {
    
    let startIndex = input.indexOf(startFlavors)
    let endIndex = input.indexOf(endFlavors)

    let newArr =  input.slice(startIndex, endIndex + 1)
    
    return newArr;

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')
