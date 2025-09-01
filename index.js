const displayInfo = document.querySelector(".input-background");
const url = "http://mgnet.me/api/create";
const shortenMagnet =
  "magnet:?xt=urn:btih:a38d0fe7c05a7b9a05aab1e38f4e2c9e672e65e0&dn=Ubuntu+11.04";

async function getData(magnetURI) {
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
getData(shortenMagnet);
