const p1Avatar = document.querySelector('#p1Avatar');

//Maybe I can select all and since they have an id in html file I may not have to do them indivdually like this?
const p1CardSlot1 = document.querySelector('#p1CardSlot1');
const p1CardSlot2 = document.querySelector('#p1CardSlot2');
const p1CardSlot3 = document.querySelector('#p1CardSlot3');
const p1CardSlot4 = document.querySelector('#p1CardSlot4');

const cardImages = [];

for(let i = 1; i <= 54; i++) {
     const cardImg = document.createElement('img');
     cardImg.className = 'cardImg';
     cardImg.src = `Valheim_Images/Card_${i}.png`;
     cardImages.push(cardImg);
}
p1CardSlot1.append(cardImages[0]);
p1CardSlot2.append(cardImages[25]);
p1CardSlot3.append(cardImages[40]);
p1CardSlot4.append(cardImages[53]);
