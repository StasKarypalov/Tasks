function createCurrencyConverter(initialExchangeRate) {
  let exchangeRate = initialExchangeRate;

  function converter(amount) {
    return amount * exchangeRate;
  }

  function setExchangeRate(newExchangeRate) {
    exchangeRate = newExchangeRate;
  }

  return {
    convert: converter,
    setRate: setExchangeRate,
  };
}

const currencyConverter = createCurrencyConverter(3.41);
console.log(currencyConverter.convert(100));

currencyConverter.setRate(3.35);
console.log(currencyConverter.convert(100));
