import os
import requests
from dotenv import load_dotenv

load_dotenv()

def fetch_current_stock_prices(symbol):
    api_key = os.environ.get('ALPHA_VANTAGE_API_KEY')

    if not api_key:
        print('API key not found. Please check your .env file.')
        return

    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=5min&apikey={api_key}'
    response = requests.get(url)

    if response.status_code != 200:
        print('Failed to fetch stock prices.')
        return

    data = response.json()

    if 'Error Message' in data:
        print('Invalid symbol.')
        return

    if 'Note' in data:
        print('API limit reached.')
        return

    try:
        
        time_series_key = next(iter(data['Time Series (5min)']))
        latest_data = data['Time Series (5min)'][time_series_key]
        latest_close_price = latest_data['4. close']
        print(f"The latest close price of {symbol} is {latest_close_price}")
    except KeyError:
        print("Could not retrieve the price. Check if the symbol is correct.")

if __name__ == '__main__':
    symbol = input("Enter the stock symbol to fetch the price(e.g., AAPL, TSLA, GOOGL): ")
    fetch_current_stock_prices(symbol)
