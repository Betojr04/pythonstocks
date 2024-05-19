import React, { useState } from "react";
import axios from "axios";
import "./StockViewer.css";

export const StockViewer = () => {
  const [ticker, setTicker] = useState("");
  const [stockPrice, setStockPrice] = useState(null);
  const [error, setError] = useState(null);

  const fetchStockPrice = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/current_price`, {
        params: { ticker: ticker }
      });
      setStockPrice(response.data.price);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching stock price:", error);
      setError("Error fetching stock price");
      setStockPrice(null); // Clear previous price if there's an error
    }
  };

  return (
    <section className="stock-container">
      <div className="stock-content">
        <h4>Stock Price</h4>
        <label htmlFor="ticker">Stock Symbol: </label>
        <input
          id="ticker"
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="e.g MSFT, AAPL.."
        />
        <button type="button" onClick={fetchStockPrice}>
          Current Ticker Price
        </button>
        {stockPrice !== null && (
          <p>
            The current price of {ticker} is ${stockPrice.toFixed(2)}
          </p>
        )}
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};
