function kiir() {
  let i = 0;
  const valutak = ["eur", "usd", "gbp", "chf", "pln", "huf"];
  fetch("https://api.coingecko.com/api/v3/exchange_rates", {
    headers: {
      accept: "application/json",
    },
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const rates = data.rates;
      for (let i = 0; i < valutak.length; i++) {
        document.getElementById(valutak[i]).textContent = rates[valutak[i]].value.toFixed(2) + " " + valutak[i].toUpperCase();
      }
    });
}
kiir();