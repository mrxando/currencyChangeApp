let api = `https://v6.exchangerate-api.com/v6/e149ca4f84189eec5f2abdd7/latest/USD`;
const fromDropDown = document.getElementById("from");
const toDropDown = document.getElementById("to");

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
  });



  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
  });


fromDropDown.value = "USD";
toDropDown.value = "PLN";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;
    if (amount.length != 0) {
      fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
          let fromExchangeRate = data.conversion_rates[fromCurrency];
          let toExchangeRate = data.conversion_rates[toCurrency];
          const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
          result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
            2
          )} ${toCurrency}`;
        });
    } else {
      alert("Please fill in the amount");
    }
  };
  document.querySelector(".convertBtn").addEventListener("click", convertCurrency);