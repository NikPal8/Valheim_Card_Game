// Any Functions will remain in this file and be called to *"appV2.js"

//Event Listeners

//Function draws random number from main deck - tested works! 0 - 14 (main deck length) 15 total elements!
function cardNum(num) {
     num = Math.floor(Math.random() * mainDeck.length);
     return num;
}

//Function draws & adds cards to Player 1 & Player 2 Deck 
function drawCards() {
     for(let i = 1; i <= 10; i++) {
          player1Deck.push(mainDeck[cardNum()]);
          player2Deck.push(mainDeck[cardNum()]);
     }
}

//Function draws random number from Player 1 deck - tested works! 0 - 9 (player 1 deck length) 10 total elements
function p1CardNum(num) {
     num = Math.floor(Math.random() * player1Deck.length);
     return num;
}

function p2CardNum(num) {
     num = Math.floor(Math.random() * player2Deck.length);
     return num;
}

//Function gets random number, drawn card equals card from player 1 deck, push card to field, remove that card from player 1 deck
function p1DrawCard() {
     let drawNum = p1CardNum();
     let drawnCard = player1Deck[drawNum];
     player1Field.push(drawnCard);
     player1Deck.splice(drawNum, 1);
}

function p2DrawCard() {
     let drawNum = p2CardNum();
     let drawnCard = player2Deck[drawNum];
     player2Field.push(drawnCard);
     player2Deck.splice(drawNum, 1);
}

//Function checks if Player 1 Field Slots are full
function p1CheckField() {
     if(player1Field.length > 3) {
          alert("Field Slots are full");
     } else {
          p1DrawCard();
     }
}

function p2CheckField() {
     if(player2Field.length > 3) {
          alert("Field Slots are full");
     } else {
          p2DrawCard();
     }
}