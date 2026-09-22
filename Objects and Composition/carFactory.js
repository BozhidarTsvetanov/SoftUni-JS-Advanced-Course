function carFactory(input) {

    let final = {
        model: input.model,
        engine: {},
        carriage: {
            type: input.carriage,
            color: input.color
        },
        
    }
    let power = input.power
    if (power <= 90) {
        final.engine = {
            power: 90,
            volume: 1800
        }
    }else if (power > 90 && power <= 120) {
        final.engine = {
            power: 120,
            volume: 2400
        }
    }else if (power > 120) {
        final.engine = {
            power: 200,
            volume: 3500
        }
    }
    let wheelsize = input.wheelsize

    if (wheelsize % 2 === 0) {
        wheelsize--
        final.wheels = Array(4).fill(wheelsize)
    }else{
        final.wheels = Array(4).fill(wheelsize)
    }
    return final;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
