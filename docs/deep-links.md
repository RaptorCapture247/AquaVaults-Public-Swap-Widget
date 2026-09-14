# Deep links

Deep links let a URL pre-select the token a user buys or sells.

The widget reads these query parameters automatically. Your page does not need custom query-string code.

## Preload a buy token

```text
https://YOUR-SITE.example/swap?av_buy=TOKEN_MINT
```

Example:

```text
https://YOUR-SITE.example/swap?av_buy=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
```

## Preload a sell token

```text
https://YOUR-SITE.example/swap?av_sell=TOKEN_MINT
```

## Preload both

```text
https://YOUR-SITE.example/swap?av_sell=SELL_MINT&av_buy=BUY_MINT
```

## Precedence

URL token parameters override `defaultFrom` / `defaultTo`.

Primary public parameters are:

```text
av_buy
av_sell
```

The current SDK also accepts generated-link compatibility aliases:

```text
output
outputMint
input
inputMint
```

Use `av_buy` and `av_sell` for integrations you control.

## Deep links versus `setToken()`

For links that may point to arbitrary tokens, prefer deep links. The widget can asynchronously resolve a mint supplied by the URL.

The runtime `setToken(side, mint)` method only changes to a token the current SDK token registry already knows about. It can no-op for a completely unknown mint that has not been resolved/loaded yet.

## Full example

See [`../examples/deep-links.html`](../examples/deep-links.html).
