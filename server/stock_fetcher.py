# importing the yfinance library as yf
import yfinance as yf


# function for returning the current price of the selected ticker symbol
def fetch_current_ticker_price(ticker_symbol):
    try:
        ticker = yf.Ticker(ticker_symbol)
        # return statement is used to return the value of the expression following it
        price = ticker.history(period="1d").Close.iloc[0]
        return price
    except Exception as e:
        print(f"Error fetching data for {ticker_symbol}: {e}")
        return None


        


