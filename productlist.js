const urlParams = new URLSearchParams(window.location.search);
const collectionFromUrl = urlParams.get("collection");

// const url =
//   "https://funkel-7745.restdb.io/rest/data-sheet-candles?q=%7B%22Collection%22:%22Pillar%22%7D";

let url = "https://funkel-7745.restdb.io/rest/data-sheet-candles";
if (collectionFromUrl) {
  url =
    'https://funkel-7745.restdb.io/rest/data-sheet-candles?q={"Collection":"' +
    collectionFromUrl +
    '"}';
  console.log(url);
}

const mediaurl = "https://funkel-7745.restdb.io/media/";

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
    const template = document.querySelector("#producttemplate").content;
    const copy = template.cloneNode(true);
    const aEl = copy.querySelector("a");
    aEl.href = "productview.html?id=" + candle._id;
    copy.querySelector("h3").textContent = candle.Name;
    copy.querySelector(".collection").textContent = candle.Collection;
    copy.querySelector(".price").textContent = candle.Price;
    const imgurl = mediaurl + candle.Image[0];

    console.log(imgurl);
    copy.querySelector("img").src = imgurl;
    const parent = document.querySelector("#productlist");
    parent.appendChild(copy);
  });
}

/* function topSellers() {
  if (this.classList.contains("topSeller")) {
      const urlPrarms = new URLSearchParams(window.location.search);
      const query = urlPrarms.get("q");
      const start = urlParams.get("start");

  endpoint?max=4
  endpoint?filter="topSeller"
 */

// function showProduct(product) {
//   console.log(product);
//   const template = document.querySelector("#smallProductTemplate").content;
//   const copy = template.cloneNode(true);
//   copy.querySelector("h2").textContent = product.productdisplayname;
//   copy.querySelector(".brandname").textContent = product.brandname;
//   copy.querySelector(
//     "img"
//   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

//   copy.querySelector("a").href = `productview.html?id=${product.id}`;
//   if (product.soldout) {
//     copy.querySelector("article").classList.add("soldOut");
//   }
//   if (product.discount) {
//     copy.querySelector("article").classList.add("onSale");
//     copy.querySelector(".prevprice").textContent = product.price + " DKK";
//     copy.querySelector(".newprice").textContent = product.discount + " DKK";
//   } else {
//     copy.querySelector(".price").textContent = product.price + " DKK";
//   }
//   const parent = document.querySelector("#productlist");
//   parent.appendChild(copy);
// }
