# AquaVaults Public Swap Widget — Integration Examples

This repository contains copy/paste examples and integration documentation for the **AquaVaults public Solana swap widget**.

The SDK itself is served by AquaVaults:

```html
<script src="https://aquavaults.com/sdk/aquavaults-sdk-open.js"></script>
```

No npm package, AquaVaults API key, per-domain allowlist, or separate Solana web3 script is required for the public widget.

> This repository is an integration/examples repository. It does **not** contain the AquaVaults SDK source code.

## Important public-SDK rules

The public/open-distribution widget is intentionally different from AquaVaults' approved community SDK integrations:

- It can be embedded on arbitrary **HTTPS** sites. `localhost` and `127.0.0.1` are supported for development.
- It uses `https://aquavaults.com` as its production API backend.
- It does **not** create AquaVaults Rewards surface evidence and public-SDK swaps do **not** earn AquaVaults Rewards points.
- The swap fee opens at **1% and is always user-adjustable** in the public widget.
- A host site cannot lock the public-SDK fee or replace the 1% opening default through config.
- The selected community can be configured and may be locked by the host.
- The public widget exposes manual Solana swaps only. It does not expose AquaVaults AutoSwap, Trigger/limit-order, EVM, admin, or Rewards-only functionality.

## Start here

| Goal | Guide | Live example source |
| --- | --- | --- |
| Widget with its own wallet-connect UI | [Built-in wallet](docs/built-in-wallet.md) | [examples/built-in-wallet.html](examples/built-in-wallet.html) |
| Use a wallet connection your site already owns | [Existing wallet](docs/existing-wallet.md) | [examples/existing-wallet.html](examples/existing-wallet.html) |
| Customize colors and sizing | [Styling](docs/styling.md) | [examples/custom-theme.html](examples/custom-theme.html) |
| Create token buy/sell links | [Deep links](docs/deep-links.md) | [examples/deep-links.html](examples/deep-links.html) |
| Control the widget from page JavaScript | [Runtime API](docs/runtime-api.md) | [examples/runtime-controls.html](examples/runtime-controls.html) |

Full option reference: [docs/configuration.md](docs/configuration.md)

Callbacks/events: [docs/callbacks.md](docs/callbacks.md)

CSP, HTTPS, and deployment notes: [docs/security-and-csp.md](docs/security-and-csp.md)

Troubleshooting: [docs/troubleshooting.md](docs/troubleshooting.md)

## Smallest working example

```html
<div id="swap-widget"></div>

<script src="https://aquavaults.com/sdk/aquavaults-sdk-open.js"></script>
<script>
  const swapper = AquaVaultsSDK.mount('#swap-widget', {
    apiBase: 'https://aquavaults.com',
    community: 'aquavaults',
    lockCommunity: false,
    defaultFrom: 'So11111111111111111111111111111111111111112',
    defaultTo: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  });
</script>
```

The SDK automatically injects its widget CSS and, when no external adapter is supplied, provides built-in browser-wallet selection for **Phantom, Solflare, and Backpack**.

## Repository layout

```text
.
├── README.md
├── index.html
├── docs/
│   ├── built-in-wallet.md
│   ├── existing-wallet.md
│   ├── configuration.md
│   ├── styling.md
│   ├── deep-links.md
│   ├── runtime-api.md
│   ├── callbacks.md
│   ├── security-and-csp.md
│   └── troubleshooting.md
├── examples/
│   ├── built-in-wallet.html
│   ├── existing-wallet.html
│   ├── custom-theme.html
│   ├── deep-links.html
│   └── runtime-controls.html
└── snippets/
    ├── basic-mount.js
    ├── external-wallet-adapter.js
    ├── callbacks.js
    └── runtime-controls.js
```

## GitHub Pages

All example files are plain static HTML. GitHub Pages can serve this repository directly without a build step.

A simple setup is:

1. Create a public GitHub repository.
2. Upload/commit these files.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

The root `index.html` links to the example pages.

## Version note

The public bundle currently exposes `AquaVaultsSDK.version` and the current SDK reports `1.0.0`.

The hosted script URL is not an immutable versioned artifact path, so test your integration after SDK updates.

## Licensing

No license file is included in this starter repository. Choose the license for this **documentation/example-code repository** before publishing if you want to grant explicit reuse rights. That choice is separate from the license or distribution terms of the AquaVaults SDK itself.
