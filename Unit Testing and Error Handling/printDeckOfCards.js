function printDeckOfCards(input) {
    let result = [];

    for (let card of input) {
        let cardFace = card.slice(0, -1);
        let cardSuit = card.slice(-1);

        try {
            result.push(createCard(cardFace, cardSuit));
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(result.join(' '))

    function createCard(cardFace, cardSuit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        if (!validFaces.includes(cardFace) || !suits[cardSuit]) {
           throw new Error();
           
        }

        let finalCard = {
            face: cardFace,
            suit: suits[cardSuit],

            toString() {
            return this.face + this.suit;
            }
        }
        return finalCard;
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
