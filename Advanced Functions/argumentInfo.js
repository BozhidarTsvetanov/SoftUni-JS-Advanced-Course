function argumentInfo() {
    let argumentsArray = Array.from(arguments)
    let countObj = {

    }

    for (let argument of argumentsArray) {
        let type = typeof argument
        console.log(`${type}: ${argument}` );
        
    }

    for (let argument of argumentsArray) {
        let type = typeof argument

        if (!countObj[type]) {
            countObj[type] = 0
        }
        countObj[type]++

        
    }
    let sorted = Object.entries(countObj).sort((a, b) => b[1] - a[1])

    for (let [type, count] of sorted) {
    console.log(`${type} = ${count}`);
    
    }
    
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); } )
