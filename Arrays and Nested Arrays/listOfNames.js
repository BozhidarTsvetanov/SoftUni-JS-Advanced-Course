function listOfNames(input) {
    input = input.sort((a, b) => a.localeCompare(b))

    for (let index = 0; index < input.length; index++) {
    console.log(`${index + 1}.${input[index]}`);
    }
    
}
listOfNames(["John", "Bob", "Christina", "Ema"])
