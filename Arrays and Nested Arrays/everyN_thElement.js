function everyN_thElement (arr, n){
    let newArr = []

for (let index = 0; index < arr.length; index += n) {
    let number = arr[index]
    newArr.push(number)
    
}
return newArr;

}
everyN_thElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
