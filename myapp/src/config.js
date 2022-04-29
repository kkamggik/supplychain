export const SUPPLY_CHAIN_ADDRESS = '0x4a06464e51e6fa4b79bb66Cea798d227BD6a10FA'

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
        "name": "first",
        "type": "string"
      },
      {
        "name": "last",
        "type": "string"
      },
      {
        "name": "company",
        "type": "string"
      },
      {
        "name": "phone",
        "type": "string"
      },
      {
        "name": "addr",
        "type": "string"
      },
      {
        "name": "abn",
        "type": "string"
      },
      {
        "name": "identity",
        "type": "uint256"
      },
      {
        "name": "state",
        "type": "uint256"
      },
      {
        "name": "account",
        "type": "address"
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
        "type": "string"
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
        "name": "_first",
        "type": "string"
      },
      {
        "name": "_last",
        "type": "string"
      },
      {
        "name": "_company",
        "type": "string"
      },
      {
        "name": "_phone",
        "type": "string"
      },
      {
        "name": "_addr",
        "type": "string"
      },
      {
        "name": "_abn",
        "type": "string"
      },
      {
        "name": "_identity",
        "type": "string"
      }
    ],
    "name": "register",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x9d0c9fca"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "userId",
        "type": "uint256"
      },
      {
        "name": "_first",
        "type": "string"
      },
      {
        "name": "_last",
        "type": "string"
      },
      {
        "name": "_company",
        "type": "string"
      },
      {
        "name": "_phone",
        "type": "string"
      },
      {
        "name": "_addr",
        "type": "string"
      }
    ],
    "name": "editInfo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xc6cc0abe"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "addUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xe1d81736"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUsers",
    "outputs": [
      {
        "components": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "first",
            "type": "string"
          },
          {
            "name": "last",
            "type": "string"
          },
          {
            "name": "company",
            "type": "string"
          },
          {
            "name": "phone",
            "type": "string"
          },
          {
            "name": "addr",
            "type": "string"
          },
          {
            "name": "abn",
            "type": "string"
          },
          {
            "name": "identity",
            "type": "uint256"
          },
          {
            "name": "state",
            "type": "uint256"
          },
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x00ce8e3e"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "deleteUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x38f14845"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "newRegistration",
    "outputs": [
      {
        "components": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "first",
            "type": "string"
          },
          {
            "name": "last",
            "type": "string"
          },
          {
            "name": "company",
            "type": "string"
          },
          {
            "name": "phone",
            "type": "string"
          },
          {
            "name": "addr",
            "type": "string"
          },
          {
            "name": "abn",
            "type": "string"
          },
          {
            "name": "identity",
            "type": "uint256"
          },
          {
            "name": "state",
            "type": "uint256"
          },
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe16a7ae1"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUser",
    "outputs": [
      {
        "components": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "first",
            "type": "string"
          },
          {
            "name": "last",
            "type": "string"
          },
          {
            "name": "company",
            "type": "string"
          },
          {
            "name": "phone",
            "type": "string"
          },
          {
            "name": "addr",
            "type": "string"
          },
          {
            "name": "abn",
            "type": "string"
          },
          {
            "name": "identity",
            "type": "uint256"
          },
          {
            "name": "state",
            "type": "uint256"
          },
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x832880e7"
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
      },
      {
        "name": "_time",
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
      },
      {
        "name": "_date",
        "type": "string"
      }
    ],
    "name": "removeMedicine",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf0ab4624"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "medicineId",
        "type": "uint256"
      },
      {
        "name": "_date",
        "type": "string"
      }
    ],
    "name": "deliverMedicine",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xe92d77b9"
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
            "type": "string"
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
            "type": "string"
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
    "constant": true,
    "inputs": [
      {
        "name": "user_id",
        "type": "uint256"
      }
    ],
    "name": "getMedicineOnTransit",
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
            "type": "string"
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
    "signature": "0xd0028aa6"
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
      },
      {
        "name": "time",
        "type": "string"
      }
    ],
    "name": "send",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x677bd565"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_medicine",
        "type": "uint256"
      },
      {
        "name": "time",
        "type": "string"
      }
    ],
    "name": "receive",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa4e77870"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_medicine",
        "type": "uint256"
      }
    ],
    "name": "getTransactions",
    "outputs": [
      {
        "components": [
          {
            "name": "src",
            "type": "string"
          },
          {
            "name": "dest",
            "type": "string"
          },
          {
            "name": "time",
            "type": "string"
          },
          {
            "name": "state",
            "type": "uint256"
          },
          {
            "name": "to",
            "type": "uint256"
          },
          {
            "name": "from",
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
    "signature": "0x5742177c"
  }
]