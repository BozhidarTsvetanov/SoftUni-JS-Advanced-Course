function sameNumbers(input) {
    let strInput = String(input)
    let theSame = true
    let firstDigit = Number(strInput[0])
    let sum = 0; 

    for (let nums of strInput) {
        nums = Number(nums)
        sum += nums

        if (nums === firstDigit) {
            
        }else{
            theSame = false
        }
    }
    console.log(theSame);
    console.log(sum);

}
sameNumbers(1234)
