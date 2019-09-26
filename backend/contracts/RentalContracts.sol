pragma solidity ^0.4.17;

contract RentalContracts {

  /* Structures */
  struct RentalContract {
    uint contractId;
    address tenantAddress;
    address landlordAddress;
    uint houseId;
    uint depositAmount;
    uint monthlyRent;
    bool isDepositPaid;
    string status;
    uint amountOfMonthsPaid;
    bool isActiveContract;
  }

  struct Payment {
    address sender;
    address receiver;
    uint contractId;
    uint amount;
  }

  /* Mappings */
  mapping (uint => RentalContract) contractMap;
  mapping (uint => Payment) paymentMap;

  /* State Variables */
  address[] tenants;
  address[] landlords;

  address[] paymentSenders;
  address[] paymentReceivers;

  /* Transactions */
  function bindContract(address _tenantAddress,
  address _landlordAddress, 
  uint _houseId,
  uint _depositAmount,
  uint _monthlyRent) public returns(bool success) {

    uint256 contractId = tenants.push(_tenantAddress) -1; //
    landlords.push(_landlordAddress);
    
    contractMap[contractId].tenantAddress = _tenantAddress;
    contractMap[contractId].landlordAddress = _landlordAddress;
    contractMap[contractId].houseId = _houseId;
    contractMap[contractId].depositAmount = _depositAmount;
    contractMap[contractId].monthlyRent = _monthlyRent;
    contractMap[contractId].isDepositPaid = false;
    contractMap[contractId].status = 'Deposit Needed';
    contractMap[contractId].amountOfMonthsPaid = 0;
    contractMap[contractId].isActiveContract = true;
    return true;
  }
  
  function getContractDetails(uint contractId) public view 
  returns (address tenantAddress,
  address landlordAddress,
  uint houseId,
  uint depositAmount,
  uint monthlyRent,
  bool isDepositPaid,
  uint amountOfMonthsPaid) {
    return (contractMap[contractId].tenantAddress,
    contractMap[contractId].landlordAddress,
    contractMap[contractId].houseId,
    contractMap[contractId].depositAmount,
    contractMap[contractId].monthlyRent,
    contractMap[contractId].isDepositPaid,
    contractMap[contractId].amountOfMonthsPaid);    
  }

  function makePayment(address _sender, 
  address _receiver, uint _contractId, uint _amount) public
  returns (bool success) {
    uint256 paymentId = paymentSenders.push(_sender) -1;
    paymentReceivers.push(_receiver);

    paymentMap[paymentId].sender = _sender;
    paymentMap[paymentId].receiver = _receiver;
    paymentMap[paymentId].contractId = _contractId;
    paymentMap[paymentId].amount = _amount;
    return true;
  }

  function getPaymentById(uint paymentId) public view
  returns (address sender, address receiver, uint contractId, uint amount) {
    return (paymentMap[paymentId].sender,
      paymentMap[paymentId].receiver,
      paymentMap[paymentId].contractId,
      paymentMap[paymentId].amount);
  }
  
  function payDeposit(address tenant, address landlord, uint contractId, uint amount) public
  returns (bool success) {
    contractMap[contractId].isDepositPaid = true;
    return true;
  }
  
  function isContractActive(uint contractId) public view
  returns (bool isActive) {
    return contractMap[contractId].isActiveContract;
  }
  
  function setAmountOfMonthsPaid(uint contractId, uint months) public
  returns (bool success) {
      contractMap[contractId].amountOfMonthsPaid = months;
      return true;
  }
  
  function getAmountOfMonthsPaid(uint contractId) public view
  returns (uint months) {
      return(contractMap[contractId].amountOfMonthsPaid);
  }

  function getTenantList() public view 
  returns (address[] addresses) {
    return tenants;
  }

  function getLandlordList() public view 
  returns (address[] addresses) {
    return landlords;
  }

  function getPaymentSenderList() public view 
  returns (address[] addresses) {
    return paymentSenders;
  }

  function getPaymentReceiversList() public view 
  returns (address[] addresses) {
    return paymentReceivers;
  }


}
