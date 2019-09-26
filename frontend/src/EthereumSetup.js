import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

let housingAddress = '0xafcb1e8f383dacb840d7789f609e9f8d06a8f833';
let userProfileAddress = '0xd9670fb09ad3cb57a5030d5a2574e2f68c9b6172';
let supportTicketAddress = '0xd5952c76a7e6e28a7defe208727262b0a309a69d';
let requestAddress = '0x283d565e2b560786d1157ad0771675dfbd11ff1d';
let rentalAddress = '0x62742a84f9d4bace2fdc4c90b845f3eb76594ab2';

let rentalABI  = [
	{
		"constant": true,
		"inputs": [],
		"name": "getTenantList",
		"outputs": [
			{
				"name": "addresses",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "paymentId",
				"type": "uint256"
			}
		],
		"name": "getPaymentById",
		"outputs": [
			{
				"name": "sender",
				"type": "address"
			},
			{
				"name": "receiver",
				"type": "address"
			},
			{
				"name": "contractId",
				"type": "uint256"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "contractId",
				"type": "uint256"
			}
		],
		"name": "getContractDetails",
		"outputs": [
			{
				"name": "tenantAddress",
				"type": "address"
			},
			{
				"name": "landlordAddress",
				"type": "address"
			},
			{
				"name": "houseId",
				"type": "uint256"
			},
			{
				"name": "depositAmount",
				"type": "uint256"
			},
			{
				"name": "monthlyRent",
				"type": "uint256"
			},
			{
				"name": "isDepositPaid",
				"type": "bool"
			},
			{
				"name": "amountOfMonthsPaid",
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
				"name": "tenant",
				"type": "address"
			},
			{
				"name": "landlord",
				"type": "address"
			},
			{
				"name": "contractId",
				"type": "uint256"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "payDeposit",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "contractId",
				"type": "uint256"
			},
			{
				"name": "months",
				"type": "uint256"
			}
		],
		"name": "setAmountOfMonthsPaid",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "contractId",
				"type": "uint256"
			}
		],
		"name": "getAmountOfMonthsPaid",
		"outputs": [
			{
				"name": "months",
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
				"name": "_sender",
				"type": "address"
			},
			{
				"name": "_receiver",
				"type": "address"
			},
			{
				"name": "_contractId",
				"type": "uint256"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "makePayment",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPaymentSenderList",
		"outputs": [
			{
				"name": "addresses",
				"type": "address[]"
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
				"name": "_tenantAddress",
				"type": "address"
			},
			{
				"name": "_landlordAddress",
				"type": "address"
			},
			{
				"name": "_houseId",
				"type": "uint256"
			},
			{
				"name": "_depositAmount",
				"type": "uint256"
			},
			{
				"name": "_monthlyRent",
				"type": "uint256"
			}
		],
		"name": "bindContract",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getPaymentReceiversList",
		"outputs": [
			{
				"name": "addresses",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "contractId",
				"type": "uint256"
			}
		],
		"name": "isContractActive",
		"outputs": [
			{
				"name": "isActive",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLandlordList",
		"outputs": [
			{
				"name": "addresses",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

let requestABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "reqId",
				"type": "uint256"
			}
		],
		"name": "getRequestById",
		"outputs": [
			{
				"name": "senderAddress",
				"type": "address"
			},
			{
				"name": "receiverAddress",
				"type": "address"
			},
			{
				"name": "houseId",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTenantList",
		"outputs": [
			{
				"name": "addresses",
				"type": "address[]"
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
				"name": "requestId",
				"type": "uint256"
			}
		],
		"name": "declineRequest",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "requestId",
				"type": "uint256"
			}
		],
		"name": "acceptRequest",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userAddress",
				"type": "address"
			},
			{
				"name": "_receiverAddress",
				"type": "address"
			},
			{
				"name": "_houseId",
				"type": "uint256"
			}
		],
		"name": "addRequest",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLandlordList",
		"outputs": [
			{
				"name": "addresses",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "requestId",
				"type": "uint256"
			}
		],
		"name": "RequestAddedOrUpdated",
		"type": "event"
	}
]

let supportTicketABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "ticketId",
				"type": "uint256"
			}
		],
		"name": "getTicketById",
		"outputs": [
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "subject",
				"type": "string"
			},
			{
				"name": "question",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "isSolved",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserList",
		"outputs": [
			{
				"name": "users",
				"type": "address[]"
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
				"name": "_userAddress",
				"type": "address"
			},
			{
				"name": "_subject",
				"type": "string"
			},
			{
				"name": "_question",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			}
		],
		"name": "createTicket",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ticketId",
				"type": "uint256"
			}
		],
		"name": "ticketHasBeenSolved",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ticketId",
				"type": "uint256"
			}
		],
		"name": "ticketHasBeenOpened",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let userProfileABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "setUserNotLooking",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "_email",
				"type": "string"
			}
		],
		"name": "setUserEmail",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "_username",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_firstname",
				"type": "string"
			},
			{
				"name": "_lastname",
				"type": "string"
			},
			{
				"name": "_occupation",
				"type": "string"
			},
			{
				"name": "_dob",
				"type": "string"
			}
		],
		"name": "addUser",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserBalance",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "firstName",
				"type": "string"
			},
			{
				"name": "lastName",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "occupation",
				"type": "string"
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
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "_occupation",
				"type": "string"
			}
		],
		"name": "setUserOccupation",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserAddresses",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUserCount",
		"outputs": [
			{
				"name": "length",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserAdvert",
		"outputs": [
			{
				"name": "advert",
				"type": "string"
			},
			{
				"name": "location",
				"type": "string"
			},
			{
				"name": "isLooking",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUserAdvertByIndex",
		"outputs": [
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "advert",
				"type": "string"
			},
			{
				"name": "location",
				"type": "string"
			},
			{
				"name": "isLooking",
				"type": "bool"
			},
			{
				"name": "firstName",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "occupation",
				"type": "string"
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
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "advert",
				"type": "string"
			},
			{
				"name": "location",
				"type": "string"
			}
		],
		"name": "setUserStatus",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUserAddressByIndex",
		"outputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "source",
				"type": "string"
			}
		],
		"name": "stringToBytes32",
		"outputs": [
			{
				"name": "result",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "incrementUsers",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"name": "setUserBalance",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "email",
				"type": "string"
			}
		],
		"name": "UserAdded",
		"type": "event"
	}
]

let housingABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "setHouseNotActive",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "houseId",
				"type": "uint256"
			}
		],
		"name": "getHousePricesById",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
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
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "propertyNo",
				"type": "string"
			},
			{
				"name": "propertyAddress",
				"type": "string"
			},
			{
				"name": "postcode",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "houseType",
				"type": "string"
			},
			{
				"name": "noOfBeds",
				"type": "uint256"
			},
			{
				"name": "monthlyPrice",
				"type": "uint256"
			},
			{
				"name": "depositAmount",
				"type": "uint256"
			}
		],
		"name": "addHouse",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "houseId",
				"type": "uint256"
			}
		],
		"name": "getHouseById",
		"outputs": [
			{
				"name": "propertyNo",
				"type": "string"
			},
			{
				"name": "propertyAddress",
				"type": "string"
			},
			{
				"name": "postcode",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "houseType",
				"type": "string"
			},
			{
				"name": "noOfBeds",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHouseCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "houseId",
				"type": "uint256"
			}
		],
		"name": "isHouseActive",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLandlordList",
		"outputs": [
			{
				"name": "addressess",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "houseId",
				"type": "uint256"
			}
		],
		"name": "HouseAdded",
		"type": "event"
	}
]



web3.eth.defaultAccount = web3.eth.accounts[0];

const rentalContract = web3.eth.contract(rentalABI).at(rentalAddress);
const housingContract = web3.eth.contract(housingABI).at(housingAddress);
const userProfileContract = web3.eth.contract(userProfileABI).at(userProfileAddress);
const supportTicketContract = web3.eth.contract(supportTicketABI).at(supportTicketAddress);
const requestContract = web3.eth.contract(requestABI).at(requestAddress);

export {
	requestContract,
	supportTicketContract,
    housingContract,
    userProfileContract,
    rentalContract,
    web3
};