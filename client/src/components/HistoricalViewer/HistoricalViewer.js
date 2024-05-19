import React, { useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./HistoricalViewer.css";

export const HistoricalViewer = () => {
  const [ticker, setTicker] = useState("");
  const [historicalData, setHistoricalData] = useState([]);
  const [error, setError] = useState(null);

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:5000/historical_stock_info",
        {
          params: { ticker: ticker, period: "1y", interval: "1d" }
        }
      );
      console.log("Response data:", response.data);
      setHistoricalData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching historical data:", error);
      setError("Error fetching historical data");
      setHistoricalData([]); // Clear previous data if there's an error
    }
  };

  return (
    <section className="historical-container">
      <div className="historical-content">
        <h4>Historical Data Viewer</h4>
        <label htmlFor="ticker">Stock Symbol: </label>
        <input
          id="ticker"
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="e.g MSFT, AAPL.."
        />
        <button type="button" onClick={fetchHistoricalData}>
          Fetch Historical Data
        </button>
        {historicalData.length > 0 && (
          <div>
            <h4>Historical Data for {ticker}</h4>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Close" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </section>
  );
};
