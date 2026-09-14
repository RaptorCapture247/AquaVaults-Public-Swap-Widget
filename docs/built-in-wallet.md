# Built-in wallet connection

Use this mode when the host website does **not** already own a Solana wallet connection.

The public AquaVaults widget detects these browser wallets:

- Phantom
- Solflare
- Backpack

If more than one supported wallet is installed, the widget presents a picker. If none is detected, the widget's wallet button directs the user to Phantom.

## 1. Add a container

```html
<div id="swap-widget"></div>
```

## 2. Load the public SDK

```html
<script src="https://aquavaults.com/sdk/aquavaults-sdk-open.js"></script>
```

Do **not** add a separate `@solana/web3.js` script for this mode. The public bundle contains the web3 primitives it needs privately and does not require a `window.solanaWeb3` global.

## 3. Mount the widget

```html
<script>
  const swapper = AquaVaultsSDK.mount('#swap-widget', {
    apiBase: 'https://aquavaults.com',
    community: 'aquavaults',
    lockCommunity: false,

    settings: {
      slippage: { default: 1.0 },
      priority: { default: 0 },
    },

    defaultFrom: 'So11111111111111111111111111111111111111112',     // SOL
    defaultTo:   'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',  // USDC

    onSwapSuccess: (result) => {
      console.log('Swap confirmed:', result.solscanUrl);
    },
  });
</script>
```

## Public fee behavior

Do not add `settings.fee` expecting to control the public widget. In the public/open-distribution build:

- opening fee = 1%
- fee is always user-adjustable
- the host cannot lock the fee
- the host cannot replace the 1% opening default

This is enforced by the SDK, even if different `settings.fee` values are passed.

## Community behavior

`community` must be a valid lowercase AquaVaults community ID.

`lockCommunity: true` fixes that selection inside the widget.

`lockCommunity: false` lets the user switch communities.

For integrations that need a specific listed community, use the exact lowercase ID supplied by AquaVaults. Invalid initial IDs are rejected at mount time.

## Full example

See [`../examples/built-in-wallet.html`](../examples/built-in-wallet.html).
