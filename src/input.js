import React from "react";

function AmountInput({ amount, setAmount }) {
  const handleAmountChange = (event) => {
    if (event.target.value < 0) return; // перевірка на введення від'ємного значення
    setAmount(event.target.value);
  };

  return (
    <div>
      <label htmlFor="from-currency">Amount:</label>
      <input
        id="from-currency"
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />
    </div>
  );
}

export default AmountInput;
