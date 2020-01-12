# Coin Convert

A simple currency converter web-app that uses CoinAPI. Allows for conversion between USD, CAD, BTC, ETH, XRP.

## How it works
1. Select currency in the two dropdown bars.
2. Enter amount in the left input box.
3. Press convert, and the converted amount will be displayed in the right input box.
4. By default, will convert from left box to right box. Can also convert from right to left if left is empty but right is not.

## Tech Stack

- CoinAPI for conversion rates

- request-promise to make GET calls

- Browserify