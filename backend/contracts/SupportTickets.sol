pragma solidity ^0.4.17;

contract SupportTickets {

  /* Events */

  /* Structures */
  struct Ticket {
    uint ticketId;
    address userAddress; //user
    string subject; //ticket subject
    string question; //user's support question
    string email;
    bool isSolved;
  }

  /* Mappings */
  mapping (uint => Ticket) ticketMap;

  /* State Variables */
  address[] userAddresses;

  /* Transactions */
  function createTicket(address _userAddress,
  string _subject, 
  string _question, 
  string _email) public returns(bool success) {

    uint256 ticketId = userAddresses.push(_userAddress) -1;
    ticketMap[ticketId].ticketId = ticketId;
    ticketMap[ticketId].userAddress = _userAddress;
    ticketMap[ticketId].subject = _subject;
    ticketMap[ticketId].question = _question;
    ticketMap[ticketId].email = _email;
    ticketMap[ticketId].isSolved = false;
    return true;
  }

  function getTicketById(uint ticketId) public view
  returns (address user, string subject, string question,
  	string email, bool isSolved) {
  	return (ticketMap[ticketId].userAddress,
  		ticketMap[ticketId].subject,
  		ticketMap[ticketId].question,
  		ticketMap[ticketId].email,
  		ticketMap[ticketId].isSolved);
  }

  function ticketHasBeenSolved(uint ticketId) public 
  returns (bool success) {
  	ticketMap[ticketId].isSolved = true;
  	return true;
  }

  function ticketHasBeenOpened(uint ticketId) public 
  returns (bool success) {
  	ticketMap[ticketId].isSolved = false;
  	return true;
  }

  function getUserList() public view
  returns (address[] users) {
  	return userAddresses;
  }

}
