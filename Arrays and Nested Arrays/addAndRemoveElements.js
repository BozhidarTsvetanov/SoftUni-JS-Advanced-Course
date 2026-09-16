function addAndRemoveElements(input) {
    let number = 0
    let arr = []
    

    for (const command of input) {
        
        if (command === 'add') {
            number++
            arr.push(number)

        }else if (command === 'remove') {
            number++
            arr.pop()

        }
    }
    if (arr.length === 0) {
        console.log('Empty');
        
    }else{
        console.log(arr.join('\n'));
        
    }   
}
addAndRemoveElements(
['add', 
'add', 
'add', 
'add']
)
