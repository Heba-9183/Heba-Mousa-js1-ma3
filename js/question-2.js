/** @format */

//Assignment quenstion nr2
const input_key = "5f7c83fa81d04a26ab771906f47ebdaa";
var api_url = new URL(
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE"
);
let params = api_url.searchParams;
params.set("key", input_key);
api_url.search = params.toString();
var new_url = api_url.toString();
console.log("The new url is : " + new_url);

fetch(api_url)
  .then((response) => response.json())
  .then((data) => createHTML(data))
  .catch((error) => console.log("An error occurred when calling the API"));

function createHTML(results) {
  const facts = results.all;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < facts.length; i++) {
    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class="result">${facts[i].name}</div>`;
    resultsContainer.innerHTML += `<div class="result">${facts[i].rating}</div>`;
    resultsContainer.innerHTML += `<div class="result">${facts[i].length}</div>`;
  }
}

async function getApi() {
  try {
    const response = await fetch(api_url);

    const data = await response.json();

    const facts = data.all;

    createHTML(facts);
  } catch (error) {
    console.log("An error occurred when calling the API");
  }
}

getApi();
