// Game logic will go here:

//Will Start with 15 cards to begin with
//Won't include images at this stage
//Game will be played out through the console for the time being

//Varaibles
const p1CardSlots = document.querySelectorAll('.p1Slots');

const p1DrawCardBtn = document.querySelector('#p1DrawCardBtn');

const p2CardSlots = document.querySelectorAll('.p2Slots');

const p2DrawCardBtn = document.querySelector('#p2DrawCardBtn');



// console.log(cardNum());
// console.log(drawCards());//Undefined last console log could be because I did not initiate function in DOM?
drawCards();

p1DrawCardBtn.addEventListener('click', ()=> {
     p1CheckField();
});

p2DrawCardBtn.addEventListener('click', ()=> {
     p2CheckField();
});

console.log(p1CardNum());

for(let slot of p1CardSlots) {
     slot.addEventListener('click', ()=> {
          if(slot === p1CardSlots[0] && player1Field[0] !== undefined) {
               alert('clicked');
          } else if(slot === p1CardSlots[1] && player1Field[1] !== undefined) {
               alert('clicked');
          } else if(slot === p1CardSlots[2] && player1Field[2] !== undefined) {
               alert('clicked');
          } else if(slot === p1CardSlots[3] && player1Field[3] !== undefined) {
               alert('clicked');
          } else {
               alert("Cant Attack, no card present!");
          }
     });
}

for(let slot of p2CardSlots) {
     slot.addEventListener('click', ()=> {
          if(slot === p2CardSlots[0] && player2Field[0] !== undefined) {
               alert('clicked');
          } else if(slot === p2CardSlots[1] && player2Field[1] !== undefined) {
               alert('clicked');
          } else if(slot === p2CardSlots[2] && player2Field[2] !== undefined) {
               alert('clicked');
          } else if(slot === p2CardSlots[3] && player2Field[3] !== undefined) {
               alert('clicked');
          } else {
               alert("Cant Attack, no card present!");
          }
     });
}