const card = document.querySelector(".card");
const cardtoggle = document.querySelector(".arrow1");
console.log("this is loaded");

cardtoggle.onclick = function () {
  card.classList.toggle("active");
};
