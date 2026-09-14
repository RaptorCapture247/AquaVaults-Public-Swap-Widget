# Runtime API

`AquaVaultsSDK.mount()` returns an SDK instance:

```js
const swapper = AquaVaultsSDK.mount('#swap-widget', config);
```

## `getWalletState()`

```js
const state = swapper.getWalletState();

console.log(state.connected);
console.log(state.address);
```

Returns:

```js
{
  connected: true,
  address: '...'
}
```

or a disconnected state with `address: null`.

## `setWalletAdapter(adapter)`

Replace/re-sync an external wallet adapter:

```js
swapper.setWalletAdapter(hostWalletAdapter);
```

The adapter must provide `signTransaction(tx)`.

## `setCommunity(id)`

```js
swapper.setCommunity('aquavaults');
```

This is ignored when `lockCommunity: true`.

Use valid lowercase AquaVaults community IDs.

## `setToken(side, mint)`

```js
swapper.setToken('from', SOL_MINT);
swapper.setToken('to', USDC_MINT);
```

`side` must be `from` or `to`.

Important: this method only proceeds when the current token registry already knows the mint. For arbitrary external token links, use `?av_buy=` / `?av_sell=` deep links instead.

## `getConfig()`

```js
console.log(swapper.getConfig());
```

Returns the resolved, frozen configuration after AquaVaults applies its public-SDK rules.

This is useful for verifying that public fee rules were enforced.

## `destroy()`

```js
swapper.destroy();
```

Removes the mounted widget, event listeners, and instance references. Call this before remounting into the same container.

## Full example

See [`../examples/runtime-controls.html`](../examples/runtime-controls.html).
