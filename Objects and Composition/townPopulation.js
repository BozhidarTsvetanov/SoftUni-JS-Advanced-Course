function townPopulation(input) {
    let obj = {}

    for (let element of input) {
        let [town, population] = element.split(' <-> ')
        population = Number(population)
        
        if (Object.hasOwn(obj, town)) {

            obj[town] += population
        } else {
            obj[town] = population

        }
    }
    console.log(Object.entries(obj).map(([town, population]) => `${town} : ${population}`).join('\n'))
    
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])
