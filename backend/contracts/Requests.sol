pragma solidity ^0.4.17;

contract Requests {

  /* Events */
  event RequestAddedOrUpdated(uint requestId);

  /* Structures */
  struct Request {
    uint requestId;
    address senderAddress; //tenant
    address receiverAddress; //landlord
    uint houseId; //house to rent
    string status;
  }

  /* Mappings */
  mapping (uint => Request) requestMap;

  /* State Variables */
  address[] senders;
  address[] receivers;

  /* Transactions */
  function addRequest(address _userAddress,
  address _receiverAddress, uint _houseId) public returns(bool success) {
      
    uint256 reqId = senders.push(_userAddress) -1; //
    receivers.push(_receiverAddress);
    
    requestMap[reqId].requestId = reqId;
    requestMap[reqId].senderAddress = _userAddress;
    requestMap[reqId].receiverAddress = _receiverAddress;
    requestMap[reqId].houseId = _houseId;
    requestMap[reqId].status = "Pending";

    return true;
  }

  function getRequestById(uint reqId) public view
  returns (address senderAddress,
    address receiverAddress,
    uint houseId,
    string status) {
    return (requestMap[reqId].senderAddress,
      requestMap[reqId].receiverAddress,
      requestMap[reqId].houseId,
      requestMap[reqId].status);
  }
  
  function acceptRequest(uint requestId) public 
  returns (bool success) {
    requestMap[requestId].status = 'Accepted';
    return true;
  }
  
  function declineRequest(uint requestId) public 
  returns (bool success) {
    requestMap[requestId].status = 'Declined';
    return true;
  }

  function getTenantList() public view
  returns (address[] addresses) {
    return senders;
  }

  function getLandlordList() public view
  returns (address[] addresses) {
    return receivers;
  }
  
}
