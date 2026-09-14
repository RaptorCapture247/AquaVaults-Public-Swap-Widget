# Callbacks

Callbacks are optional.

```js
const swapper = AquaVaultsSDK.mount('#swap-widget', {
  apiBase: 'https://aquavaults.com',

  onReady: () => {},

  onSwapSuccess: (result) => {},

  onSwapError: (error) => {},

  onWalletChange: (state) => {},
});
```

## `onReady()`

Runs after the SDK instance finishes its synchronous initialization and renders the widget.

RPC initialization continues in the background, so `onReady` should not be treated as proof that Solana RPC is already available.

## `onSwapSuccess(result)`

The current result object includes:

```js
{
  signature,
  feeStrategy,
  solscanUrl,
  confirmed,
  estimatedOutput
}
```

Example:

```js
onSwapSuccess: (result) => {
  console.log('Signature:', result.signature);
  console.log('Solscan:', result.solscanUrl);
}
```

## `onSwapError(error)`

Receives an `Error` object.

```js
onSwapError: (error) => {
  console.error(error.message);
}
```

User cancellation can arrive here as an ordinary swap error; do not automatically retry a rejected signing request.

## `onWalletChange(state)`

Current shape:

```js
{
  connected: true,
  address: '...'
}
```

On disconnect:

```js
{
  connected: false,
  address: null
}
```

Use callbacks for host analytics or UI updates, not for calculating or overriding AquaVaults fee routing.
