from flask import Blueprint, jsonify, request
import yfinance as yf

api = Blueprint("api", __name__)


# ROUTE TO RETRIEVE MOST CURRENT STOCK PRICE
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
    
    
# ROUTE TO RETREIVE HISTORICAL STOCK INFORMATION IN INTERVALS
@api.route("/historical_stock_info", methods=["GET"])
def historical_stock_prices():
    ticker_symbol = request.args.get('ticker')
    period = request.args.get('period', '1y')
    interval = request.args.get('interval', '1d')
    
    if not ticker_symbol:
        return jsonify({"error" : "Ticker Symbol is required"}), 400
    
    try:
        ticker = yf.Ticker(ticker_symbol)
        hist = ticker.history(period=period, interval=interval)
        
        if hist.empty:
            print(f"No data found for ticker: {ticker_symbol}")
            return jsonify({"error": "No data found for the given parameters"}), 404

        data = hist.reset_index().to_dict(orient='records')
        print(f"Data to be returned: {data}")
        return jsonify(data)
    except Exception as e:
        print(f"Exception occurred: {e}")
        return jsonify({"error": str(e)}), 500
    