const displayInfo = document.querySelector(".input-background");
const url = "https://cleanuri.com/api/v1/shorten";

async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
getData();
