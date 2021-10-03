export const initialState = {
  web3: null,
  contract: { unsubscribe: [], unsubscribeNames: [], isLoading: false },
  dataForContract: {
    address: "0xdEb913dcd3b8aA626571bd64173BaB82679E85A1",
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "freeAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "AddFreeAddress",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "salesmanAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "AddSalesman",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "shopNewAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "AddShopEvent",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "role",
            type: "uint256",
          },
        ],
        name: "ChangeRole",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "bookAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "CASId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "mark",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "changer",
            type: "address",
          },
        ],
        name: "MarkComment",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "mark",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "changer",
            type: "address",
          },
        ],
        name: "MarkComplaint",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "bookAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
        ],
        name: "NewComment",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "bookAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
        ],
        name: "NewComplaint",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "requestType",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "NewRequest",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "role",
            type: "uint256",
          },
        ],
        name: "NewRole",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "NewUser",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "freeAddress",
            type: "address",
          },
        ],
        name: "RemoveFreeAddress",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "salesman",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "RemoveSalesman",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
        ],
        name: "RemoveShop",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "requestType",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "RequestFinished",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "AccRequestBank",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "requestId",
            type: "uint256",
          },
        ],
        name: "AccRequestSalesman",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "requestId",
            type: "uint256",
          },
        ],
        name: "AccRequestShoper",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
        ],
        name: "AddComment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "mark",
            type: "uint256",
          },
        ],
        name: "AddComplaints",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "freeAddressId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "string",
            name: "login",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "password",
            type: "bytes32",
          },
        ],
        name: "AddShop",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "BankRequestShop",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "BeAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "BeSalesman",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "BeShoper",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "requestId",
            type: "uint256",
          },
        ],
        name: "CancelRequestSalesman",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "requestId",
            type: "uint256",
          },
        ],
        name: "CancelRequestShoper",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "DeleteShop",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
        ],
        name: "DisikeComment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
        ],
        name: "DisikeComplaints",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
        ],
        name: "LikeComment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
        ],
        name: "LikeComplaints",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "login",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "password",
            type: "bytes32",
          },
        ],
        name: "LoginUser",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "RequestToSalesmanFunc",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "RequestToShoperFunc",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "ShowSalesmanOfStore",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
        ],
        name: "ToBankRequest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "bankRequestsIndexes",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "bookOfComplaintsAndSuggestions",
        outputs: [
          {
            internalType: "uint256",
            name: "complaintsId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "login",
            type: "string",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "mark",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "comments",
        outputs: [
          {
            internalType: "uint256",
            name: "commentId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "login",
            type: "string",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "freeAddresses",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBankRequestsIndexes",
        outputs: [
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBeBuyerRequests",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "senderAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "currentRole",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "newRole",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "shopId",
                type: "int256",
              },
              {
                internalType: "bool",
                name: "isFinish",
                type: "bool",
              },
            ],
            internalType: "struct Shoping.Request[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getBeSalesmanRequests",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "senderAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "currentRole",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "newRole",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "shopId",
                type: "int256",
              },
              {
                internalType: "bool",
                name: "isFinish",
                type: "bool",
              },
            ],
            internalType: "struct Shoping.Request[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "CASId",
            type: "uint256",
          },
        ],
        name: "getCASComments",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "commentId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "login",
                type: "string",
              },
              {
                internalType: "string",
                name: "comment",
                type: "string",
              },
              {
                internalType: "address[]",
                name: "likes",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "dislikes",
                type: "address[]",
              },
            ],
            internalType: "struct Shoping.Comment[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getFreeAddresses",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "shopAddress",
            type: "address",
          },
        ],
        name: "getShopComplainAndSuggestion",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "complaintsId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "login",
                type: "string",
              },
              {
                internalType: "string",
                name: "comment",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "mark",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "likes",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "dislikes",
                type: "address[]",
              },
            ],
            internalType: "struct Shoping.ComplaintsAndSuggestions[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getShops",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "shopId",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "shopAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "city",
                type: "string",
              },
              {
                internalType: "address[]",
                name: "salesmen",
                type: "address[]",
              },
              {
                internalType: "bool",
                name: "haveBankMoney",
                type: "bool",
              },
            ],
            internalType: "struct Shoping.Shop[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getUsersAddresses",
        outputs: [
          {
            internalType: "address[]",
            name: "",
            type: "address[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "FIO",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "password",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "login",
            type: "string",
          },
        ],
        name: "regUser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "requestToSalesman",
        outputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "senderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "currentRole",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newRole",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "shopId",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "isFinish",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "requestToShoper",
        outputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "senderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "currentRole",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newRole",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "shopId",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "isFinish",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "shop",
        outputs: [
          {
            internalType: "uint256",
            name: "shopId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "shopAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "city",
            type: "string",
          },
          {
            internalType: "bool",
            name: "haveBankMoney",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
        ],
        name: "upgradeToAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "user",
        outputs: [
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "FIO",
            type: "string",
          },
          {
            internalType: "string",
            name: "login",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "password",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "role",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "shopId",
            type: "int256",
          },
          {
            internalType: "bool",
            name: "isSalesman",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isAdmin",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "userArray",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "zeroAddress",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
  user: {
    address: null,
    fio: null,
    role: null,
    login: null,
    salesmen: [],
    isAdmin: false,
    isSalesman: false,
    balance: null,
  },
  shops: [],
  login: {
    isLogin: false,
  },
  registration: {
    isReg: false,
  },
  CAS: {},
  requests: {
    beAdmin: [],
    beSalesman: [],
    beBuyer: [],
    toBank: [],
  },
  users: [],
  freeAddresses: [],
};
