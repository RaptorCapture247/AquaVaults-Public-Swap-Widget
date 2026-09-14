const swapper = AquaVaultsSDK.mount('#swap-widget', {
  apiBase: 'https://aquavaults.com',

  onReady: () => {
    console.log('AquaVaults widget initialized');
  },

  onSwapSuccess: (result) => {
    console.log('Confirmed:', result.signature);
    console.log('Solscan:', result.solscanUrl);
    console.log('Fee strategy:', result.feeStrategy);
    console.log('Estimated output:', result.estimatedOutput);
  },

  onSwapError: (error) => {
    console.error('Swap error:', error.message);
  },

  onWalletChange: (state) => {
    console.log(state.connected ? state.address : 'disconnected');
  },
});
