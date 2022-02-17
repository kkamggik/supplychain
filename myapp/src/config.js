export const SUPPLY_CHAIN_ADDRESS = '0xA4d5840509AB04596eA37DDaDE02D4E9eEb5E4d8'

export const SUPPLY_CHAIN_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "userCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x07973ccf"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "company",
        "type": "string"
      },
      {
        "name": "addr",
        "type": "string"
      },
      {
        "name": "identity",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x365b98b2"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "medicineCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x4dafd490"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "medicine_id",
        "type": "uint256"
      },
      {
        "name": "from",
        "type": "uint256"
      },
      {
        "name": "to",
        "type": "uint256"
      },
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x9ace38c2"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "transactionCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xb77bf600"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "medicines",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "serial",
        "type": "string"
      },
      {
        "name": "holder",
        "type": "uint256"
      },
      {
        "name": "manufacturer",
        "type": "uint256"
      },
      {
        "name": "directions",
        "type": "string"
      },
      {
        "name": "mDate",
        "type": "string"
      },
      {
        "name": "eDate",
        "type": "string"
      },
      {
        "name": "state",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xc85e766d"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_company",
        "type": "string"
      },
      {
        "name": "_addr",
        "type": "string"
      },
      {
        "name": "_identity",
        "type": "string"
      },
      {
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "addUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xdbbed8ad"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_serial",
        "type": "string"
      },
      {
        "name": "_directions",
        "type": "string"
      },
      {
        "name": "_mDate",
        "type": "string"
      },
      {
        "name": "_eDate",
        "type": "string"
      }
    ],
    "name": "addMedicine",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x7bae75b5"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "medicineId",
        "type": "uint256"
      }
    ],
    "name": "removeMedicine",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x9bfff076"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "user_id",
        "type": "uint256"
      }
    ],
    "name": "getMedicine",
    "outputs": [
      {
        "components": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "serial",
            "type": "string"
          },
          {
            "name": "holder",
            "type": "uint256"
          },
          {
            "name": "manufacturer",
            "type": "uint256"
          },
          {
            "name": "directions",
            "type": "string"
          },
          {
            "name": "mDate",
            "type": "string"
          },
          {
            "name": "eDate",
            "type": "string"
          },
          {
            "name": "state",
            "type": "uint256"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa6742265"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_serial",
        "type": "string"
      }
    ],
    "name": "getMedicineBySerial",
    "outputs": [
      {
        "components": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "serial",
            "type": "string"
          },
          {
            "name": "holder",
            "type": "uint256"
          },
          {
            "name": "manufacturer",
            "type": "uint256"
          },
          {
            "name": "directions",
            "type": "string"
          },
          {
            "name": "mDate",
            "type": "string"
          },
          {
            "name": "eDate",
            "type": "string"
          },
          {
            "name": "state",
            "type": "uint256"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x5904fb33"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_destination",
        "type": "uint256"
      },
      {
        "name": "_medicine",
        "type": "uint256"
      }
    ],
    "name": "send",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xd56768eb"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_medicine",
        "type": "uint256"
      }
    ],
    "name": "receive",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xcba2534f"
  }
]