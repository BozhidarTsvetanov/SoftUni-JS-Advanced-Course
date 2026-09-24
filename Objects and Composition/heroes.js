function heroes() {
    let mage = {
        mana: 100,

        cast(spell) {
            console.log(`${this.name} cast ${spell}`);
            this.mana -= 10;
        }
    };

    let fighter = {
        stamina: 100,

        fight() {
            console.log(`${this.name} slashes at the foe!`);
            this.stamina -= 10;
        }
    };

    return {
        mage(name) {
            let hero = Object.create(mage);
            hero.name = name;
            return hero;
        },

        fighter(name) {
            let hero = Object.create(fighter);
            hero.name = name;
            return hero;
        }
    };
}

let create = heroes();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball")

scorcher.cast("thunder")
scorcher.cast("light") 
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
