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
      document.getElementById("eur").textContent = rates.eur.value + " EUR";
      document.getElementById("usd").textContent = rates.usd.value + " USD";
      document.getElementById("gbp").textContent = rates.gbp.value + " GBP";
      document.getElementById("chf").textContent = rates.chf.value + " CHF";
      document.getElementById("pln").textContent = rates.pln.value + " PLN";
      document.getElementById("huf").textContent = rates.huf.value + " HUF";

    });
}
kiir();