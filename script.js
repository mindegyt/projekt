function kiir() {
  fetch("https://api.coingecko.com/api/v3/exchange_rates", {
    headers: {
      accept: "application/json",
    },
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const rates = data.rates;
      document.getElementById("eur").textContent = rates.eur.value.toFixed(2) + " EUR";
      document.getElementById("usd").textContent = rates.usd.value.toFixed(2) + " USD";
      document.getElementById("gbp").textContent = rates.gbp.value.toFixed(2) + " GBP";
      document.getElementById("chf").textContent = rates.chf.value.toFixed(2) + " CHF";
      document.getElementById("pln").textContent = rates.pln.value.toFixed(2) + " PLN";
      document.getElementById("huf").textContent = rates.huf.value.toFixed(2) + " HUF";

    });
}
kiir();