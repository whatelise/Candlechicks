const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const url =
  "https://funkel-7745.restdb.io/rest/data-sheet-candles/" + productId;

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
    showProduct(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  console.log(product);
  document.querySelector(".productname").textContent = product.Name;
  document.querySelector(".price").textContent = product.Price;
  const imgurl = mediaurl + product.Image[0];
  document.querySelector("img").src = imgurl;
  console.log(imgurl);
  document.querySelector("p.collection").textContent = product.Collection;
  document.querySelector(".details").innerHTML = product.Description;
  document.querySelector(".measurement span").textContent = product.Measurement;
}
