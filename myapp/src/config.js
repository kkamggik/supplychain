export const SUPPLY_CHAIN_ADDRESS = '0xA5B51C939E1018366ac99E45b721312C2880a024'

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
        "name": "timeStamp_sent",
        "type": "uint256"
      },
      {
        "name": "timeStamp_recv",
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
        "name": "mName",
        "type": "string"
      },
      {
        "name": "serial",
        "type": "string"
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
    "signature": "0xb48ff0f1"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_mName",
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
    "signature": "0x32a486d8"
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
    "constant": false,
    "inputs": [
      {
        "name": "_destination",
        "type": "address"
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
    "signature": "0xd0679d34"
  }
]