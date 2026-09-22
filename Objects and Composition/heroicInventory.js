function heroicInventory(input) {
    let finalArr = []

    for (let element of input) {
        let [name, level, items] = element.split(' / ')
        level = Number(level)

        if (element === '') {
        continue;
        }

        if (items) {
            items = items.split(', ');

        } else {
            items = [];

        }

        let final = {
            name: name,
            level: level,
            items: items
        }
        finalArr.push(final)
    }
    let json = JSON.stringify(finalArr)
    console.log(json);

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])
