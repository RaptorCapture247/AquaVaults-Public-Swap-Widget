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

## No API keys in the browser

Do not add Jupiter, RPC-provider, or AquaVaults server secrets to example code.

The hosted public SDK calls AquaVaults public gateway endpoints.

## Public SDK and Rewards

Swaps made through the Public Swap Widget are not eligible for AquaVaults Rewards. Public-SDK swaps should not be represented to users as Rewards-eligible SDK activity.

## Wallet signing

The widget builds the Solana transaction and requests signature through the user's wallet. The user can inspect/reject the wallet request.

Do not auto-retry when the wallet reports a user rejection.

## Integration origin

AquaVaults may record the website origin associated with public-widget swap activity for attribution and reporting. Use the public widget from the real site origin you intend to operate.
