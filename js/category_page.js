// window.addEventListener("load", start);

const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");
console.log(type);

const url = `https://tasjap-117c.restdb.io/rest/ceramics?q={"type" : {"$in" : ["${type}"]}}`;
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
    // handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

// function start() {
//     console.log("start");
//     document.querySelector(".filter").addEventListener("click", openFilters);
//   }
