require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember unveil harvest glory bottom try'; 
let testAccounts = [
"0xdcab901a380b5eafe60cae5d578887a4dca4d4f20d710c894c8d8dd12c1e3fbd",
"0x87aa5692718719e3808d6448c1c7c16c6d5869eb88c5085284a18af76f38c103",
"0xf7b72bd3a3a06b4a06ecded898d154c0378f6eeb06af907063e6ab96da1b43a1",
"0x0ac0bd03ffded5bea1f49c46b2d75e049c349ad2f0953325ff22e4d5f185ca80",
"0x458c759a8c886d534912b011700a8ae7c4592e2fa7d6a1b2bf8f49f8d2c2a2a9",
"0x17367f304930fe0395d23fe16fc93501b7aa62e7f4a571045531671833df7852",
"0xb6c96a5f9985ed758496a2b49a9f4e283bfdf6386d07d368066d71d90b89c501",
"0xa30ede9100622ed55bfc977ce56eef3c2d6b58269b9aea111ae0fd6a46f23116",
"0xe0faa87ab9065307e1cf6329d4366be7b3015cce4474c54f2d8e61d281c4dcf6",
"0x553a566f30092985076fcea0931998959d8935f392e8f20b2cd85752a413319e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

