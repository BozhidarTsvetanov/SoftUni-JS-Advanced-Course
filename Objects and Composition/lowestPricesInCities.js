function lowestPricesInCities(input) {
    let obj = {}
    for (const element of input) {
        let [town, product, price] = element.split(' | ')
        price = Number(price)

        if (obj.hasOwnProperty(product)) {

            if (price < obj[product].price) {

                obj[product].price = price;
                obj[product].town = town;
            }
        } else {
            obj[product] = {
                price: price,
                town: town
            };

        }

    }
    let entries = Object.entries(obj)

    for (let [product, data] of entries) {
        console.log(`${product} -> ${data.price} (${data.town})`);
    }
}
lowestPricesInCities
    (['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'])
