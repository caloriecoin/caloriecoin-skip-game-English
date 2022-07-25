export const TronJsonRpcUrl = 'https://nile.trongrid.io/jsonrpc';
export const TronTestAccountPrivateKey = '';
export const CalorieCoinContractAddress =
  '641b4d2e4a7bfb6c29f114804dd39ad3695e8715';
export const CalorieCoinContractABI = [
  {
    inputs: [
      {indexed: true, name: '_owner', type: 'address'},
      {indexed: true, name: '_spender', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'Approval',
    type: 'Event',
  },
  {
    inputs: [
      {indexed: true, name: 'from', type: 'address'},
      {name: 'value', type: 'uint256'},
    ],
    name: 'Burn',
    type: 'Event',
  },
  {
    inputs: [
      {indexed: true, name: '_from', type: 'address'},
      {indexed: true, name: '_to', type: 'address'},
    ],
    name: 'OwnershipTransferred',
    type: 'Event',
  },
  {
    inputs: [
      {indexed: true, name: '_from', type: 'address'},
      {indexed: true, name: '_to', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'Transfer',
    type: 'Event',
  },
  {name: 'acceptOwnership', stateMutability: 'Nonpayable', type: 'Function'},
  {
    outputs: [{name: 'remaining', type: 'uint256'}],
    inputs: [
      {name: '_owner', type: 'address'},
      {name: '_spender', type: 'address'},
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{name: 'success', type: 'bool'}],
    inputs: [
      {name: '_spender', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{name: 'success', type: 'bool'}],
    inputs: [
      {name: '_spender', type: 'address'},
      {name: '_value', type: 'uint256'},
      {name: '_extraData', type: 'bytes'},
    ],
    name: 'approveAndCall',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{name: 'balance', type: 'uint256'}],
    inputs: [{name: '_owner', type: 'address'}],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{name: 'success', type: 'bool'}],
    inputs: [{name: '_value', type: 'uint256'}],
    name: 'burn',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{name: 'success', type: 'bool'}],
    inputs: [
      {name: '_from', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'burnFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{type: 'uint8'}],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{type: 'string'}],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{type: 'address'}],
    name: 'newOwner',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{type: 'address'}],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{type: 'string'}],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{type: 'uint256'}],
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{name: 'success', type: 'bool'}],
    inputs: [
      {name: '_to', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{name: 'success', type: 'bool'}],
    inputs: [
      {name: 'tokenAddress', type: 'address'},
      {name: 'tokens', type: 'uint256'},
    ],
    name: 'transferAnyERC20Token',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{name: 'success', type: 'bool'}],
    inputs: [
      {name: '_from', type: 'address'},
      {name: '_to', type: 'address'},
      {name: '_value', type: 'uint256'},
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{name: '_newOwner', type: 'address'}],
    name: 'transferOwnership',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
];
