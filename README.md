# Coin Convert

A simple currency converter web-app that uses CoinAPI. Allows for conversion between USD, CAD, EUR, and AUD. Also allows for conversion to value of cryptocurrencies including BTC, ETH, XRP, BCH.

## How it works
#### To convert from one currency to another:
1. Select first and second currency types in the first two dropdowns
2. Enter value in first input box
3. Click convert button

#### To convert to crypto:
1. Select cryptocurrency in third dropdown
2. Select currency in either first or second dropdown
3. Enter value in corresponding input box
4. Click convert button

#### Convert from crypto
1. Select cryptocurrency in third dropdown
2. Select currency in first (and or second)
3. Enter value in third input box
4. Click convert from crypto button

## Tech Stack

- CoinAPI for conversion rates

- request-promise to make GET calls

- Browserify