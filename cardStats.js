const cardImages = [];
const cardAttacks = [];
const cardHps = [];

for (let i = 1; i <= 54; i++) {
     const cardImg = document.createElement('img');
     cardImg.className = 'cardImg';
     cardImg.src = `Valheim_Images/Card_${i}.png`;
     cardImages.push(cardImg);
 }


for(let i = 0; i < 10; i++) {
     let randNumAttack = Math.floor(Math.random() * 15) + 1;
     let randNumHp = Math.floor(Math.random() * 15) + 1;
     cardAttacks.push(randNumAttack);
     cardHps.push(randNumHp);
     // console.log(randNum15);
}

console.log(cardAttacks);
console.log(cardHps);