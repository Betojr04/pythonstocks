from api.stock_fetcher import fetch_current_ticker_price


def main():
    
    while True:
        ticker_symbol = input("Enter a ticker symbol: ")

        price = fetch_current_ticker_price(ticker_symbol)
        
        if price is not None:
            print(f"The current price of {ticker_symbol} is ${price:.2f}")
        else:
            print(f"Failed to fetch the current price for {ticker_symbol}.")

        getting_more_ticker_prices = input("Would you like to see more ticker prices? (yes/no): ")
        
        if getting_more_ticker_prices.lower() != "yes":
            print("Okay, Goodbye!")
            break
            
            
if __name__ == "__main__":
    main()
    
    
    