const imgArray = [
  { id: 1, name: "bomb", imgURL: "images/img-1.png" },
  { id: 2, name: "bomb", imgURL: "images/img-1.png" },
  { id: 3, name: "bomb", imgURL: "images/img-1.png" },
  { id: 4, name: "bomb", imgURL: "images/img-1.png" },
  { id: 5, name: "diamond", imgURL: "images/img-2.png" },
  { id: 6, name: "diamond", imgURL: "images/img-2.png" },
  { id: 7, name: "diamond", imgURL: "images/img-2.png" },
  { id: 8, name: "diamond", imgURL: "images/img-2.png" },
  { id: 9, name: "diamond", imgURL: "images/img-2.png" },
  { id: 10, name: "diamond", imgURL: "images/img-2.png" },
  { id: 11, name: "diamond", imgURL: "images/img-2.png" },
  { id: 12, name: "diamond", imgURL: "images/img-2.png" },
  { id: 13, name: "diamond", imgURL: "images/img-2.png" },
  { id: 14, name: "diamond", imgURL: "images/img-2.png" },
  { id: 15, name: "diamond", imgURL: "images/img-2.png" },
  { id: 16, name: "diamond", imgURL: "images/img-2.png" },
  { id: 17, name: "diamond", imgURL: "images/img-2.png" },
  { id: 18, name: "diamond", imgURL: "images/img-2.png" },
  { id: 19, name: "diamond", imgURL: "images/img-2.png" },
  { id: 20, name: "diamond", imgURL: "images/img-2.png" },
  { id: 21, name: "diamond", imgURL: "images/img-2.png" },
  { id: 22, name: "diamond", imgURL: "images/img-2.png" },
  { id: 23, name: "diamond", imgURL: "images/img-2.png" },
  { id: 24, name: "diamond", imgURL: "images/img-2.png" },
  { id: 25, name: "diamond", imgURL: "images/img-2.png" },
]
shuffleCards();

const gameoverDisplay = document.querySelector(".modal-body");
const cards = document.querySelectorAll('.card');
const cardsClicked = [];

for(let i = 0; i < [...cards].length; i++) {
  const img = cards[i].children[1];
  img.innerHTML = `<img src="${imgArray[i].imgURL}">`;
}

[...cards].map((card, index) => {
  card.addEventListener('click', (event) => {
    const clickedCard = event.target;
    clickedCard.classList.add('flip');
    gameOver(index);
  });
});

function gameOver(index) {
  if (cardsClicked.includes(imgArray[index]) === false) {
    cardsClicked.push(imgArray[index]);
  } else {
    return;
  }

  if(imgArray[index].name === "bomb"){
    setTimeout(() => {
      alert(`Oppsss, Better luck next time!`);
      location.reload();
    }, 500)
  }
  
  else if(cardsClicked.length === 4) {
    setTimeout(() => {
      alert(`Congratulation, You win!`);
      location.reload();
    }, 500)
  }
}

function shuffleCards() {
  imgArray.sort(() => 0.5 - Math.random());
}

// function renderModal(index) {
//   if(imgArray[index].name === "bomb") {
//     gameoverDisplay.innerHTML = `
//       <h1>Oppss.</h1>
//       <img src="images/bomb.gif">
//       <p>You loss!</p>
//     `;
//   } else {
//     gameoverDisplay.innerHTML = `
//       <h1>Congtratulations.</h1>
//       <p class="fs-1">🎉</p>
//       <p>You win!</p>
//     `;
//   }
//   const gameOver = new bootstrap.Modal(document.querySelector("#gameOver"))
//   gameOver.show();
//   shuffleCards();
// }