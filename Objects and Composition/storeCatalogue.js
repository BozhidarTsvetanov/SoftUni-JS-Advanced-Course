function storeCatalogue(input) {
    let obj = {}

    for (let element of input) {
        let [product, price] = element.split(' : ')
        price = Number(price)


        obj[product] = price

    }
    let entries = Object.entries(obj)
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]))
    let currentLetter = ''

    for (let [product, price] of sorted) {
        
        let firstLetter = product[0]
        if (firstLetter !== currentLetter) {
            console.log(firstLetter);
            currentLetter = firstLetter
            
        }
        console.log(`  ${product}: ${price}`);
        
    }
    

}
storeCatalogue
(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])
