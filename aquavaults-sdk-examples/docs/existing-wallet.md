# Use a wallet connection your site already owns

Use this mode when your website already connects the user's Solana wallet and you want AquaVaults to use that same wallet rather than displaying its own Connect Wallet button.

The integration has two pieces:

1. pass an SDK-compatible wallet adapter
2. set `wallet.headless: true`

## Adapter contract

The SDK requires an adapter object with a working:

```js
signTransaction(tx)
```

At runtime it also reads wallet state from:

```js
adapter.connected
adapter.publicKey
```

A `publicKeyString` getter is optional but useful.

Recommended optional methods:

```js
connect()
disconnect()
signAndSendTransaction(tx)
on(event, handler)
off(event, handler)
```

The SDK prefers `signAndSendTransaction()` when it is genuinely available. If it is not available, omit that property and the SDK falls back to signing followed by AquaVaults RPC broadcast.

## Generic provider wrapper

```js
const provider = YOUR_EXISTING_SOLANA_PROVIDER;

const hostWalletAdapter = {
  get connected() {
    return Boolean(provider.connected || provider.isConnected);
  },

  get publicKey() {
    return provider.publicKey || null;
  },

  get publicKeyString() {
    return provider.publicKey?.toBase58?.() || null;
  },

  async signTransaction(tx) {
    return provider.signTransaction(tx);
  },

  ...(typeof provider.signAndSendTransaction === 'function'
    ? {
        async signAndSendTransaction(tx) {
          return provider.signAndSendTransaction(tx);
        },
      }
    : {}),

  on(event, handler) {
    provider.on?.(event, handler);
  },

  off(event, handler) {
    provider.off?.(event, handler);
  },
};
```

Then mount:

```js
const swapper = AquaVaultsSDK.mount('#swap-widget', {
  apiBase: 'https://aquavaults.com',

  wallet: {
    adapter: hostWalletAdapter,
    headless: true,
  },

  community: 'aquavaults',
  lockCommunity: false,
});
```

With `headless: true`, the AquaVaults wallet button is hidden. Your site owns the connection UX.

## If your provider does not emit connect/disconnect events

After your host wallet connects or changes accounts, re-supply the adapter so the SDK immediately re-syncs:

```js
swapper.setWalletAdapter(hostWalletAdapter);
```

## Important compatibility note

The public AquaVaults bundle carries its own private Solana web3 implementation, but it does not publish it to `window.solanaWeb3`.

Your host site may use its own Solana/web3/wallet stack. The adapter boundary is the supported integration point.

## Full example

See [`../examples/existing-wallet.html`](../examples/existing-wallet.html).
