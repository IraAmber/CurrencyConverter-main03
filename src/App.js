import React, { useState } from "react";
import useExchangeRate from './useExchangeRate';
import AmountInput from './input';
import CurrencySelect from "./select";
import "./styles.css";

function CurrencyConverter() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("UAH");
  const [amount, setAmount] = useState(1);
  const rate = useExchangeRate(from, to);
  const convertAmount = amount * rate;

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  
  return (
    <section className="app">
      <header>
        <h1>Currency Converter</h1>
        <p>
          1 {from} = {rate} {to}
        </p>
      </header>
      <main>
          <AmountInput amount={amount} setAmount={setAmount} />
          <CurrencySelect
            id="from-currency-select"
            type="number"
            placeholder="Введіть значення"
            label="From:"
            currency={from}
            handleChange={handleFromChange}
          />
          <CurrencySelect
            id="to-currency-select"
            label="To:"
            currency={to}
            handleChange={handleToChange}
          />
           
        <div>
          <label htmlFor="to-currency">To:</label>
          <input
            id="to-currency"
            type="number"
            value={convertAmount}
            disabled
          />
          <select id="to-currency-select" value={to} onChange={handleToChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="UAH">UAH</option>
          </select>
        </div>
      </main>
    </section>
  );
}

export default CurrencyConverter;
