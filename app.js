const p1Avatar = document.querySelector('#p1Avatar');
//Maybe I can select all and since they have an id in html file I may not have to do them indivdually like this?
const p1CardSlot1 = document.querySelector('#p1CardSlot1');
const p1CardSlot2 = document.querySelector('#p1CardSlot2');
const p1CardSlot3 = document.querySelector('#p1CardSlot3');
const p1CardSlot4 = document.querySelector('#p1CardSlot4');

//Maybe add binary arrays?
const cardSlotValues = [false, false, false, false];

const cardImages = [];

for (let i = 1; i <= 54; i++) {
    const cardImg = document.createElement('img');
    cardImg.className = 'cardImg';
    cardImg.src = `Valheim_Images/Card_${i}.png`;
    cardImages.push(cardImg);
}
/**
 * Random number generator
 * @returns Number
 */
function randNum() {
    return Math.floor(Math.random() * 54) + 1;
}
/**
 * Creates a card element using the cardImages array
 * @param {Number} index 
 * @returns Object
 */
function createCardImage(index) {
    const cardImg = document.createElement('img');
    cardImg.className = 'cardImg';
    cardImg.src = `Valheim_Images/Card_${index}.png`;
    return cardImg;
}
/**
 * Function that checks if p1CardSlots are empty
 * If empty appends to the first available card slot
 */
function checkCardSlots() {
    let n = randNum();
    if (cardSlotValues[0] === false) {
        p1CardSlot1.append(createCardImage(n));
        cardSlotValues[0] = true;

    } else if (cardSlotValues[1] === false) {
        p1CardSlot2.append(createCardImage(n));
        cardSlotValues[1] = true;

    } else if (cardSlotValues[2] === false) {
        p1CardSlot3.append(createCardImage(n));
        cardSlotValues[2] = true;

    } else if (cardSlotValues[3] === false) {
        p1CardSlot4.append(createCardImage(n));
        cardSlotValues[3] = true;
    }
   
}

p1Avatar.addEventListener('click', () => {
    checkCardSlots();
});