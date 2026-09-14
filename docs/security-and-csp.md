# HTTPS, CSP, and security notes

## HTTPS requirement

For remote browser integrations, serve your page over HTTPS.

AquaVaults allows `localhost` / `127.0.0.1` HTTP for local development.

## Recommended CSP allowances

A restrictive host Content-Security-Policy must allow the AquaVaults script and network requests.

A practical minimum for the widget itself is:

```text
script-src 'self' https://aquavaults.com;
connect-src 'self' https://aquavaults.com;
img-src 'self' data: https:;
```

Merge these sources into your existing policy rather than replacing your site's CSP wholesale.

Why `img-src ... https:`? Token metadata can contain HTTPS image URLs from multiple token/project hosts.

The public widget talks to AquaVaults proxy endpoints; you do not need to expose AquaVaults' Jupiter or Solana provider credentials in your frontend.

## No secrets or private credentials in the browser

Never place API keys, wallet private keys, seed phrases, signing keys, backend credentials, or other secrets in the widget configuration or frontend JavaScript.

The AquaVaults Public Swap Widget does not require private AquaVaults, Jupiter, or RPC-provider credentials from the integrating website.

The hosted Public Swap Widget communicates with AquaVaults public gateway endpoints.

## Public Swap Widget and Rewards

Swaps made through the AquaVaults Public Swap Widget are not eligible for AquaVaults Rewards.

## Wallet signing

The widget builds the Solana transaction and requests signature through the user's wallet. The user can inspect/reject the wallet request.

Do not auto-retry when the wallet reports a user rejection.

## Integration origin

AquaVaults may record the website origin associated with Public Swap Widget activity for attribution and reporting. Use the widget from the real site origin you intend to operate.

