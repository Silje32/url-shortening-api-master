const displayInfo = document.querySelector(".input-background");
const url = "https://http://mgnet.me/api/create";

async function getData() {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ magnet: magnetURI }),
  });

  let data = await response.json();
  console.log(data);
}
getData();
