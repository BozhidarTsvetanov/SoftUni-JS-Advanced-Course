function playingCards(cardFace, cardSuit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    if (!validFaces.includes(cardFace)) {
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
console.log(playingCards('2', 'S').toString());
