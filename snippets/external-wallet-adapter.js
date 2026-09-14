// Replace this with the provider your site already uses.
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

const swapper = AquaVaultsSDK.mount('#swap-widget', {
  apiBase: 'https://aquavaults.com',
  wallet: {
    adapter: hostWalletAdapter,
    headless: true,
  },
});
