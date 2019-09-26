pragma solidity ^0.4.22;

contract UserProfiles {


  /* Events */
  event UserAdded(string email);

  /* Structures */
  struct UserProfile {
    string username;
    string email;
    string firstName;
    string lastName;
    string occupation;
    string dob;
  }
  
  struct UserAdvert {
    string advert;
    string advertLocation;
    bool isLookingForHouse;
  }
  
  /* Mappings */
  
  //maps addresses to an instance of
  //structure UserDetails

  mapping (address => UserProfile) profiles;

  mapping (address => UserAdvert) userAdverts;
  mapping (address => uint) userBalances;


  /* State Variables */
  address[] userAddresses;

  /* Transactions */  
  function addUser(address userAddress,
  string _username,
  string _email,
  string _firstname,
  string _lastname,
  string _occupation,
  string _dob) public returns(bool success) {

    profiles[userAddress].username = _username;  
    profiles[userAddress].email = _email;
    profiles[userAddress].firstName = _firstname;
    profiles[userAddress].lastName = _lastname;
    profiles[userAddress].occupation = _occupation;
    profiles[userAddress].dob = _dob;
    
    userAddresses.push(userAddress);
    return true;
  }
  
  
  //function isUser(address userAddress) public constant
  //returns(bool result) {
  //    if(userAddresses.length == 0) return false;
  //    return (userAddresses[profiles[userAddress].index] == userAddress);
  //}

  
  function getUserInfo(address userAddress) public view 
  returns (string username, string firstName, string lastName, string email, string occupation) {
    return (profiles[userAddress].username, 
    profiles[userAddress].firstName,
    profiles[userAddress].lastName,
    profiles[userAddress].email,
    profiles[userAddress].occupation);
  }
  
  
  function getUserAdvert(address userAddress) public view 
  returns (string advert, string location, bool isLooking) {
    /*return status of a user*/
    return (userAdverts[userAddress].advert, userAdverts[userAddress].advertLocation, userAdverts[userAddress].isLookingForHouse);
  }
  
  function getUserAdvertByIndex(uint index) public view 
  returns (address user, 
           string advert, 
           string location, 
           bool isLooking,
           string firstName,
           string email,
           string username,
           string occupation) {
               
      address userAddress = getUserAddressByIndex(index);
      return(userAddress,
             userAdverts[userAddress].advert, 
             userAdverts[userAddress].advertLocation, 
             userAdverts[userAddress].isLookingForHouse,
             profiles[userAddress].firstName,
             profiles[userAddress].email,
             profiles[userAddress].username,
             profiles[userAddress].occupation);
  }
    
  function setUserNotLooking(address userAddress) public 
  returns (bool success) {
    /*set looking status to false*/
    userAdverts[userAddress].isLookingForHouse = false;
    userAdverts[userAddress].advertLocation = '';
    userAdverts[userAddress].advert = '';
    /*remove from posts*/

    return true;
  }
    
  function setUserStatus(address userAddress, string advert, string location) public 
  returns (bool success) {
    userAdverts[userAddress].advert = advert;
    userAdverts[userAddress].isLookingForHouse = true;
    userAdverts[userAddress].advertLocation = location;
    
    return true;
  }

  function setUserBalance(address userAddress, uint balance) public 
  returns (bool success) {
    userBalances[userAddress] = balance;
    return true;
  }
  
  function getUserBalance(address userAddress) public view 
  returns (uint balance) {
    return userBalances[userAddress];
  }
  
  function stringToBytes32(string memory source) public pure 
  returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
        return 0x0;
    }

    assembly {
        result := mload(add(source, 32))
    }
  }
  
  //function compareStrings (string a, string b) public view returns (bool){
  //     return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
  // }

  function getUserAddresses() public view returns (address[]) {
    return userAddresses;
  }
  
  
  //function getAllUserAdverts(string location) public 
  //returns (address[] addresses, bytes32[] adverts, uint result) {
 //      allSearchAddresses.length = 0;
 //     allSearchAdverts.length = 0;

     // uint arrayLength = userAddresses.length;
      
      //for (uint i=0; i<arrayLength; i++) {
      //    address addr = userAddresses[i];
          //bool locationCompare = (compareStrings(location, userAdverts[addr].advertLocation ));
      //    if (userAdverts[addr].isLookingForHouse) {
       //       bytes32 advert = stringToBytes32(userAdverts[addr].advert);
       //       allSearchAddresses.push(addr);
        //      allSearchAdverts.push(advert);
       //   }
     // }
     // return (allSearchAddresses, allSearchAdverts, arrayLength);
  //}
  
  
  function getUserCount() public view returns (uint length) {
      return userAddresses.length;
  }
  
  
  function getUserAddressByIndex(uint index) public constant 
  returns(address userAddress) {
  return userAddresses[index];
  }
  
  function setUserOccupation(address userAddress, string _occupation) public
  returns(bool success){
      profiles[userAddress].occupation = _occupation;
      return true;
  }
  
  function setUserEmail(address userAddress, string _email) public
  returns(bool success){
      profiles[userAddress].email = _email;
      return true;
  }
  
}