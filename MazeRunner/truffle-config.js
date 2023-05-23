const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = '<your mnemonic phrase>';
const infuraProjectId = '<your Infura project ID>';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraProjectId}`);
      },
      network_id: 4,
      gas: 5500000,
      gasPrice: 10000000000, // 10 gwei (Default: 20 gwei)
      confirmations: 2, // Number of block confirmations to wait before deployment is considered successful (Default: 0)
      timeoutBlocks: 200, // Number of blocks to wait before a deployment times out (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: '0.8.9', // Specify a specific version of the Solidity compiler
    },
  },
};
