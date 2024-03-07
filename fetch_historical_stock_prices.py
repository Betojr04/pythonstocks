import requests
import os
from dotenv import load_dotenv

load_dotenv()

def fetch_historical_stock_prices(symbol):
    api_key = os.environ.get('ALPHA_VANTAGE_API_KEY')
    url = requests.get(f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey={api_key}')
    
    response = requests.get(url)
    print(response.status_code)