///////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", start);


function start() {
    buildNav();
    // this should load the cups
    loadProductType("Cups");
};

function loadProductType(productType) {
    //here starts the functions for fetching the data
    // const url = "https://tasjap-117c.restdb.io/rest/ceramics?max=56";
    const url = `https://tasjap-117c.restdb.io/rest/ceramics?q={"type" : {"$in" : ["${productType}"]}}`;
console.log(url);
    const options = {
        headers: {
            "x-apikey": "61b25dc172a03f5dae822248",
        },
    };

    //fetch de data
    fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
              handleData(data);
        })
        .catch((e) => {
            console.error("An error occured:", e.message);
        });

};

// clone the template that we have for the 6 bands

function handleData(cups) {
const mainEl = document.querySelector("main");
mainEl.innerHTML="";
//here I grab each on of the elements from the array
cups.forEach((cup) => {
  //here I console log it to make sure everything is okay
  console.log(cup);
  //here I take the template that I already have
  const template = document.querySelector("template").content;
  //here I clone it
  const clone = template.cloneNode(true);
  //here I add all the data from database to the existing tags from the template
//   clone.querySelector("h2").textContent = paint.period;
//   clone.querySelector("img").setAttribute("src", paint.photo);
//   clone
//     .querySelector("img")
//     .setAttribute("alt", paint.title + ", by " + paint.artist);
//   //here I add the id of the band to have it on the http so it can be selected as a single element
//   clone.querySelector(
//     ".templates a"
//   ).href = `productList.html?period=${paint.period}`;
  //here I place all my clones in the main
  //here I show the clones on main
  mainEl.appendChild(clone);

  // bl bl
});
}


function buildNav() {
    document.querySelectorAll(".discover a").forEach(aEl => {
        aEl.addEventListener("click", getNameOfProductType)
    });

};

function getNameOfProductType(event) {
    event.preventDefault();
    const productType = event.target.parentElement.hash.replace("#", "")
    // console.log(event.target.parentElement.hash);
    console.log(productType);
    loadProductType(productType);
    // alert("hello")
};