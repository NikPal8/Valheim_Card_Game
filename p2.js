//
const p2Avatar = document.querySelector('#p2Avatar');
//Maybe I can select all and since they have an id in html file I may not have to do them indivdually like this?
const p2CardSlot1 = document.querySelector('#p2CardSlot1');
const p2CardSlot2 = document.querySelector('#p2CardSlot2');
const p2CardSlot3 = document.querySelector('#p2CardSlot3');
const p2CardSlot4 = document.querySelector('#p2CardSlot4');

const cardSlotValues2 = [false, false, false, false];


function checkCardSlots2() {
     let n = randNum();
     if (cardSlotValues2[0] === false) {
         p2CardSlot1.append(createCardImage(n));
         cardSlotValues2[0] = true;
 
     } else if (cardSlotValues2[1] === false) {
         p2CardSlot2.append(createCardImage(n));
         cardSlotValues2[1] = true;
 
     } else if (cardSlotValues2[2] === false) {
         p2CardSlot3.append(createCardImage(n));
         cardSlotValues2[2] = true;
 
     } else if (cardSlotValues2[3] === false) {
         p2CardSlot4.append(createCardImage(n));
         cardSlotValues2[3] = true;
     }
    
 }