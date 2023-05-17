function kiir() {

fetch("https://api.coingecko.com/api/v3/exchange_rates", {
  "headers": {
    "accept": "application/json"
  },
  "method": "GET",
}).then(adat => adat.json())
.then(res => {
    document.getElementById("teny").innerHTML = res["fact"];
})
}