// Assuming:
// const swapper = AquaVaultsSDK.mount(...);

const SOL = 'So11111111111111111111111111111111111111112';
const USDC = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

console.log(swapper.getWalletState());
console.log(swapper.getConfig());

swapper.setToken('from', SOL);
swapper.setToken('to', USDC);

// Ignored if lockCommunity: true.
swapper.setCommunity('aquavaults');

// On SPA route teardown:
// swapper.destroy();
