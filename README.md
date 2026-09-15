# AquaVaults Public Swap Widget

Add the AquaVaults Solana swap widget to any website with a few lines of HTML.

The public widget is served directly by AquaVaults:

```html
<script src="https://aquavaults.com/sdk/aquavaults-sdk-open.js"></script>
```

No npm package, AquaVaults API key, per-domain approval, or separate Solana web3 script is required.

## Live Examples

**Live examples site:**  
https://raptorcapture247.github.io/AquaVaults-Public-Swap-Widget/

> **Live mainnet warning:** The example widgets connect to Solana mainnet and can perform real swaps with real assets. Always review transaction details in your wallet before signing.

---

## Quick Start — Add the Widget to Your Website

You only need three things:

1. Load the AquaVaults Public Swap Widget script.
2. Add a `<div>` where you want the widget to appear.
3. Mount the widget after that `<div>` exists.

### 1. Load the widget

Add this inside your page `<head>`:

```html
<script src="https://aquavaults.com/sdk/aquavaults-sdk-open.js"></script>
```

No separate Solana web3.js script is required.

### 2. Add the widget container

Put this exactly where you want the swap widget to appear on your page:

```html
<div id="swap-widget"></div>
```

### 3. Mount the widget

Add this near the bottom of your page, before `</body>`:

```html
<script>
  AquaVaultsSDK.mount('#swap-widget', {
    apiBase: 'https://aquavaults.com'
  });
</script>
```

### Complete minimal example

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <script src="https://aquavaults.com/sdk/aquavaults-sdk-open.js"></script>
</head>

<body>

  <div id="swap-widget"></div>

  <script>
    AquaVaultsSDK.mount('#swap-widget', {
      apiBase: 'https://aquavaults.com'
    });
  </script>

</body>
</html>
```

That's it.

The widget will load with its default settings and built-in wallet connection.

If you want to customize the widget, set a community, change the default token pair, use your site's existing wallet connection, add deep links, change the widget appearance, or use runtime controls, continue into the guides below.

---

## Customize the Widget

- [Built-in wallet connection](docs/built-in-wallet.md)
- [Use your website's existing wallet connection](docs/existing-wallet.md)
- [Configuration options](docs/configuration.md)
- [Styling and colors](docs/styling.md)
- [Deep links](docs/deep-links.md)
- [Runtime API](docs/runtime-api.md)
- [Callbacks](docs/callbacks.md)
- [Security and CSP](docs/security-and-csp.md)
- [Troubleshooting](docs/troubleshooting.md)

---

## Public Widget Behavior

The AquaVaults Public Swap Widget is intended for public website integrations.

- It can be embedded on arbitrary HTTPS websites.
- `localhost` and `127.0.0.1` are supported for development.
- No AquaVaults API key or private backend credential is required.
- The public widget opens with a 1% swap fee.
- The user can always adjust the swap fee.
- The embedding website cannot lock or override the public widget's opening fee.
- The selected community may be configured and optionally locked by the host website.
- Swaps made through the AquaVaults Public Swap Widget are **not eligible for AquaVaults Rewards**.
- The public widget is for manual Solana swaps.

If your project later becomes an approved AquaVaults integration and you want widget swaps to participate in the approved Rewards flow, the integration must be moved from the public widget path to the approved SDK path.

---

## Built-In Wallet Connection

If your site does not already have its own Solana wallet connection, the public widget can provide the wallet connection UI for you.

The built-in flow supports:

- Phantom
- Solflare
- Backpack

See:

[Built-in wallet connection guide](docs/built-in-wallet.md)

---

## Already Have a Wallet Connection?

If your website already connects the user's Solana wallet, you can use that existing wallet connection instead of showing the widget's built-in Connect Wallet button.

See:

[Existing wallet integration guide](docs/existing-wallet.md)

---

## Deep Links

You can create links that automatically preload a token into the embedded widget.

### Preload a buy token

```text
https://your-site.example/swap?av_buy=TOKEN_MINT
```

### Preload a sell token

```text
https://your-site.example/swap?av_sell=TOKEN_MINT
```

See the full guide:

[Deep links](docs/deep-links.md)

---

## Styling

The widget can be styled to better match your website using AquaVaults CSS variables.

Example:

```css
#swap-widget {
  --av-accent: #00c2a8;
  --av-border: #00c2a8;
  --av-radius: 16px;
}
```

See:

[Styling and colors](docs/styling.md)

---

## Examples

The repository includes complete standalone HTML examples that can be opened directly in a browser or inspected in an editor.

- [Built-in wallet example](examples/built-in-wallet.html)
- [Existing wallet example](examples/existing-wallet.html)
- [Custom theme example](examples/custom-theme.html)
- [Deep-link example](examples/deep-links.html)
- [Runtime controls example](examples/runtime-controls.html)

Live versions are available at:

https://raptorcapture247.github.io/AquaVaults-Public-Swap-Widget/

---

## JavaScript Snippets

Small copy/paste snippets are also available:

- [Basic mount](snippets/basic-mount.js)
- [External wallet adapter](snippets/external-wallet-adapter.js)
- [Callbacks](snippets/callbacks.js)
- [Runtime controls](snippets/runtime-controls.js)

---

## Repository Structure

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

---

## Security

Never place API keys, wallet private keys, seed phrases, signing keys, backend credentials, or other secrets in widget configuration or frontend JavaScript.

The AquaVaults Public Swap Widget does not require private AquaVaults, Jupiter, or RPC-provider credentials from the integrating website.

See:

[Security and CSP](docs/security-and-csp.md)

---

## Notes for Developers

- Use the exact production SDK URL shown in this README.
- Use lowercase AquaVaults community IDs.
- Use the exact Solana mint address when configuring project tokens.
- Keep the mount code after the widget container exists in the page.
- Use HTTPS for production integrations.
- Use the documented CSS variables rather than depending on internal widget class names.

---

## SDK Version

The public bundle currently exposes:

```js
AquaVaultsSDK.version
```

The current SDK reports:

```text
1.0.0
```

The hosted script URL is not an immutable versioned artifact path, so test your integration after SDK updates.

---

## License

No license file is included in this repository yet.

If a license is added later, it should apply to the documentation and example code in this repository only unless explicitly stated otherwise. It should not be interpreted as granting a license to the hosted AquaVaults SDK itself.

---

## AquaVaults

Website:

https://aquavaults.com

Public Swap Widget repository:

https://github.com/RaptorCapture247/AquaVaults-Public-Swap-Widget
