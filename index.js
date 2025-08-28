const displayInfo = document.querySelector(".input-background");
const url = "https://cleanuri.com/api/v1/shorten";

async function getData() {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: "http://google.com/",
    }),
  });

  let data = await response.json();
  console.log(data);
}
getData();
