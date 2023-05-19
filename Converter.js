function convert() {
    const fromAmount = parseFloat(document.getElementById("from").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    const rates = {
      USD: 1,
      EUR: 0.82,
      JPY: 109.99,
      GBP: 0.72,
      CAD: 1.21,
    };
  
    const rate = rates[toCurrency] / rates[fromCurrency];
    const toAmount = fromAmount * rate;
  
    document.getElementById("to").value = toAmount.toFixed(2);
  }
  function Buy() {
    const fromAmount = parseFloat(document.getElementById("from").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    const rates = {
      USD: 1,
      EUR: 0.82,
      JPY: 109.99,
      GBP: 0.72,
      CAD: 1.21,
      ZAR:0.18,
    };
  
    const rate = rates[toCurrency] / rates[fromCurrency];
    const toAmount = fromAmount * rate;
  
    document.getElementById("to").value = toAmount.toFixed(2);
    document.getElementById("result").innerHTML = `${fromAmount} ${fromCurrency} = ${toAmount.toFixed(2)} ${toCurrency}`;
  }
  
  