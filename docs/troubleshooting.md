# Troubleshooting

## `AquaVaultsSDK is not defined`

Confirm this loads before your mount code:

```html
<script src="https://aquavaults.com/sdk/aquavaults-sdk-open.js"></script>
```

## `solanaWeb3 not available`

The current public open-distribution bundle is standalone and should not require a host `solanaWeb3`.

If you see this with `aquavaults-sdk-open.js`, first hard-refresh and confirm the browser is not serving an old cached bundle.

Do not fix the public integration by permanently adding an extra web3 CDN script.

## Balance shows zero / quote will not load

Check browser console for:

```text
RPC connection established
```

If RPC did not initialize, the widget cannot fetch wallet balances or construct quotes.

## `429 Too Many Requests`

The public widget debounces interactive fee/slippage quote changes and respects server backoff.

Avoid writing host code that repeatedly remounts the widget or manually hammers AquaVaults public endpoints.

## Priority changes do not instantly re-quote

That is intentional. Priority fee does not change the Jupiter token output, so the public widget avoids spending quote capacity on priority-only changes.

## `setToken()` appears to do nothing

`setToken()` currently needs the token to already be known by the SDK token registry.

For arbitrary project-token links, use:

```text
?av_buy=MINT
```

or:

```text
?av_sell=MINT
```

## Existing wallet is connected but AquaVaults still shows disconnected

If your host adapter does not emit `connect` / `disconnect` events, re-sync it:

```js
swapper.setWalletAdapter(hostWalletAdapter);
```

## Community ID rejected

Initial community IDs are validated against the community registry bundled into the SDK and must be lowercase.

Use the exact ID supplied by AquaVaults.
