function solution() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }

    }

    function management(action) {
        let [command, item, quantity] = action.split(' ')
        quantity = Number(quantity)

        if (command === 'restock') {
            ingredients[item] += quantity
            return 'Success';

        } else if (command === 'prepare') {
            let recipe = recipes[item]
            let neededIngredients
            let inStock
            for (const ingredient in recipe) {
                neededIngredients = recipe[ingredient] * quantity
                inStock = ingredients[ingredient]

                if (inStock < neededIngredients) {
                    return `Error: not enough ${ingredient} in stock`

                } else {
                    ingredients[ingredient] -= neededIngredients
                }

            }

            return 'Success'
        } else if (command === 'report') {
            return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`
        }
    }
    return management
}

let manager = solution();
console.log(manager("restock flavour 50"));// Success  
console.log(manager("prepare lemonade 4"));// Error: not enough carbohydrate in stock 
