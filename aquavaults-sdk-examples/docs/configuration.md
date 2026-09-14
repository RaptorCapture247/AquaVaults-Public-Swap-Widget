# Configuration reference

```js
const swapper = AquaVaultsSDK.mount('#swap-widget', {
  // options
});
```

## Supported public-SDK options

| Option | Type | Default | Public-SDK behavior |
| --- | --- | --- | --- |
| `apiBase` | string | required | Production must be exactly `https://aquavaults.com`. Localhost/127.0.0.1 are allowed for development. |
| `community` | string | `aquavaults` | Lowercase AquaVaults community ID. Invalid initial IDs throw. |
| `lockCommunity` | boolean | `false` | `true` prevents switching community in the widget. |
| `wallet.adapter` | object | `null` | External wallet adapter. Must provide `signTransaction(tx)`. |
| `wallet.headless` | boolean | `false` | Hides the SDK wallet-connect UI; intended for host-owned wallet connections. |
| `settings.slippage.default` | number | `1.0` | Percent. Range 0–50. User remains free to adjust it. |
| `settings.priority.default` | number | `0` | Lamports. Range 0–10,000,000. `0` means automatic. User remains free to adjust it. |
| `showDebugLog` | boolean | `false` | Shows the widget's in-page debug console when `true`. |
| `defaultFrom` | string | SOL mint | Initial sell token mint. |
| `defaultTo` | string | USDC mint | Initial buy token mint. |
| `onReady` | function | `null` | Runs after SDK instance initialization. |
| `onSwapSuccess` | function | `null` | Runs after confirmed swap. |
| `onSwapError` | function | `null` | Runs when initialization or swap execution reports an error. |
| `onWalletChange` | function | `null` | Runs on wallet connect/disconnect events bridged to the SDK. |

## Public fee configuration is intentionally not host-controlled

The open-distribution bundle overwrites host-provided fee settings with:

```text
opening fee: 1%
locked: false
```

Therefore these do **not** customize the public widget:

```js
settings: {
  fee: { default: 5, locked: true }
}
```

The user still opens at 1% and may change the fee.

## Slippage/priority cannot be locked

Even if a host passes:

```js
slippage: { locked: true }
priority: { locked: true }
```

the SDK forces both to remain user-adjustable.

## Options that should not be relied on

The current source accepts some fields that are not meaningful public customization controls:

- `wallet.autoConnect` is parsed but currently has no runtime behavior in the widget.
- `showSettingsPanel` is forced on.
- `theme: 'light'` is not a complete supported light theme in V1.

This repository intentionally does not present those as supported customization features.

## Common token mints

```text
SOL   So11111111111111111111111111111111111111112
USDC  EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
USDT  Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB
```

For project tokens, always use the exact Solana mint address.
