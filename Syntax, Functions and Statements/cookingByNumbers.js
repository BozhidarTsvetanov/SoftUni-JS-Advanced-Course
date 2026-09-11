function cookingByNumbers(number,operation1,operation2,operation3,operation4,operation5) {

    number = Number(number)
    let array = [operation1,operation2,operation3,operation4,operation5]

    for (let operation of array) {
        
        switch (operation) {
            case 'chop':
                number /= 2
                break;

            case 'dice':
                number = Math.sqrt(number)
                break;

            case 'spice':
                number++
                break;

            case 'bake':
                number *= 3
                break;

            case 'fillet':
                number = number * 0.80
                break;
        }
        console.log(number);
        
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
