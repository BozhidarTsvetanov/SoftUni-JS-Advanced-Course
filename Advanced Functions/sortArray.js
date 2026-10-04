function sortArray(array, command) {
    
    if (command === 'asc') {
        array.sort((a, b) => a - b)
        return array;

    }else{
        array.sort((a, b) => b - a)
        return array;
    }

}
sortArray([14, 7, 17, 6, 8], 'asc' )
