const url = ”https://tasjap-117c.restdb.io/rest/ceramics?max=56”;

const options = {

headers: {

“x-apikey”: ”61b25dc172a03f5dae822248”,

},

};


 

fetch(url, options)

.then((response) => {

if (!response.ok) {

throw Error(response.statusText);

}

return response.json();

})

.then ((data) => {

console.log(data);

})

.catch((e) => {

console.error(“An error occurred:”, e.message);

});