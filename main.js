const imgArray = [
  { name: "bomb", imgURL: "images/img-1.png" },
  { name: "bomb", imgURL: "images/img-1.png" },
  { name: "bomb", imgURL: "images/img-1.png" },
  { name: "bomb", imgURL: "images/img-1.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
  { name: "diamond",imgURL: "images/img-2.png" },
]
imgArray.sort(() => 0.5 - Math.random());

const cards = document.querySelectorAll('.card');
const backView = document.querySelectorAll('.back-view');

for(let i = 0; i < [...cards].length; i++) {
  const img = cards[i].children[1];
  img.innerHTML = `<img src="${imgArray[i].imgURL}" data-id="${i}">`;
  console.log(img)
}

// img.src = imgArray[i].imgURL;
// const imgSrc = img.getAttribute('src');
// let text = element.getAttribute("class");
// element.setAttribute("class", "democlass");

// function flipCard(event) {
//   const clickedCard = event.target;
//   clickedCard.classList.add('flip');

//   const backView = document.querySelector('.back-view');
//   const cardHTML = `<img src="${imgArray[index].imgURL}" data-id="${index}"`
//   backView.innerHTML = cardHTML;
//   console.log(clickedCard)
// }

[...cards].map((card, index) => {

  card.addEventListener('click', (event) => {
    const clickedCard = event.target;
    clickedCard.classList.add('flip');
  });
});