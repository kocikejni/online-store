const CurrencyFormatter = (number:number) => {
  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  });

  return CURRENCY_FORMATTER.format(number);
};

export default CurrencyFormatter;
