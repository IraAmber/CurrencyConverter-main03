import React from "react";

function CurrencySelect({ id, label, currency, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={currency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UAH">UAH</option>
      </select>
    </div>
  );
}

export default CurrencySelect;
