export const CalorieCoinContractABI = [
    {
        "constant": true,
        "inputs": [
           {
              "internalType": "address",
              "name": "account",
              "type": "address"
           }
        ],
        "name": "balanceOf",
        "outputs": [
           {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
           }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
           {
              "internalType": "address",
              "name": "to",
              "type": "address"
           },
           {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
           }
        ],
        "name": "transfer",
        "outputs": [
           {
              "internalType": "bool",
              "name": "",
              "type": "bool"
           }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
     },
];

export const CalorieCoinContractAddress = '0x51d0702265fc71dc6b0377e7f6c39abe0a9957d4';

export const CalorieCoinPrivateKey = '0x003634eed4ec22d4eaa356416bf15a760eaf40765e070bd8ecfa3ba94ceaeea3';

export const CalorieCoinAddress = '0xc06f0c1d5199dd3b3f235c757a482b7bd5421268';