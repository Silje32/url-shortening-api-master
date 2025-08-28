const url = "https://api.shrtco.de/v2/shorten?url=";
async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
getData();
