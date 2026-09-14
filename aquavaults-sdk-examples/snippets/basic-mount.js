const swapper = AquaVaultsSDK.mount('#swap-widget', {
  apiBase: 'https://aquavaults.com',
  community: 'aquavaults',
  lockCommunity: false,

  settings: {
    slippage: { default: 1.0 },
    priority: { default: 0 },
  },

  defaultFrom: 'So11111111111111111111111111111111111111112',
  defaultTo: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
});
