const url =
  "https://funkel-7745.restdb.io/rest/data-sheet-candles?q={%22topSeller%22:%22YES%22}&max=4";
/* const url = "https://funkel-7745.restdb.io/rest/data-sheet-candles?max=4"; */
/* const url = "https://funkel-7745.restdb.io/rest/data-sheet-candles?q={topSeller:YES}&max=4"; */
/* const url = "https://funkel-7745.restdb.io/rest/data-sheet-candles"+?q={"topSeller":"YES"}&max=4;*/
const mediaurl = "https://funkel-7745.restdb.io/media/";
/* &q={topSeller:"YES"} */

const options = {
  headers: {
    "x-apikey": "603400ae5ad3610fb5bb6520",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(product) {
  product.forEach((candle) => {
    console.log(candle);
    const template = document.querySelector("#producttemplate1").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = candle.Name;
    copy.querySelector(".collection").textContent = candle.Collection;
    copy.querySelector(".price").textContent = candle.Price;
    const imgurl = mediaurl + candle.Image[0];
    console.log(imgurl);
    copy.querySelector("img").src = imgurl;
    const parent = document.querySelector("#topSeller");
    parent.appendChild(copy);
  });
}

/* function topSellers() {
  if (this.classList.contains("topSeller")) {
      const urlPrarms = new URLSearchParams(window.location.search);
      const query = urlPrarms.get("q");
      const start = urlParams.get("start");

  endpoint?max=4
  endpoint?filter="topSeller" */
