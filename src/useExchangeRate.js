import { useState, useEffect } from 'react';
import config from './config';

function useExchangeRate(from, to) {
    const [currencyRate, setRate] = useState(0);
  

useEffect(() => {
    const fetchCurrencyRate = async () => {
      try {
        const response = await fetch(
              `https://api.exchangeratesapi.io/v1/latest?access_key=${config.accessKey}&base=${from}&symbols=${to}`
           );
        const data = await response.json();
        setRate(data.rates[to]);
      } catch (error) {
        console.error('Error fetching exchange rate: ', error);
    }
      };

    fetchCurrencyRate();
  }, [from, to]);

  return currencyRate;
}

export default useExchangeRate;
