from flask import Blueprint, jsonify, request
import requests
import yfinance as yf

api = Blueprint("api", __name__)

@api.route("/current_price", methods=["GET"])
def fetch_current_ticker_price():
    ticker_symbol = request.args.get('ticker')
    if not ticker_symbol:
        return jsonify({"error": "Ticker symbol is required"}), 400
    
    try:
        ticker = yf.Ticker(ticker_symbol)
        price = ticker.history(period="1d").Close.iloc[0]
        return jsonify({"price": price})
    except Exception as e:
        print(f"Error fetching data for {ticker_symbol}: {e}")
        return jsonify({"error": "Unable to fetch data"}), 500