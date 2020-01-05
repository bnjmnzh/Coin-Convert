# Coin Convert

A simple currency converter web-app that uses CoinAPI. Allows for conversion between USD, CAD, EUR, and AUD. Also allows for conversion to value of cryptocurrencies including BTC, ETH, XRP, BCH. 

## How it works
The top button will convert from the first currency into either the second currency or the third currency, depending on which one is not empty. The second button will convert from the third currency into the first and second ones, if they are non-empty.

## Tech Stack
- CoinAPI for conversion rates
- request-promise to make GET calls
- Browserify