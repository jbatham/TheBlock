pragma solidity ^0.4.17;

contract HouseListings {

  /* Events */
  event HouseAdded(uint houseId);

  /* Structures */
  struct HouseDetails {
    address ownerAddress;
    string propertyNo;
    string propertyAddress;
    string postcode;
    string city;
    string houseType;
    uint noOfBeds;
    uint monthlyPrice;
    uint depositAmount;
    bool isHouseActive; //is house available
  }

  /* Mappings */
  mapping (uint => HouseDetails) houses;

  //mapping (address => int256[]) userHouseMap;

  /* State Variables */
  address[] landlords;

  int256[] resultList;
  uint numberOfHousesRegistered;

  /* Transactions */
  function addHouse(address userAddress,
    string propertyNo,
    string propertyAddress,
    string postcode,
    string city,
    string houseType,
    uint noOfBeds,
    uint monthlyPrice,
    uint depositAmount) public returns(bool success) {
    uint256 houseid = landlords.push(userAddress) -1;

    houses[houseid].ownerAddress = userAddress;
    houses[houseid].propertyNo = propertyNo;
    houses[houseid].propertyAddress = propertyAddress;
    houses[houseid].city = city;
    houses[houseid].houseType = houseType;
    houses[houseid].noOfBeds = noOfBeds;
    houses[houseid].monthlyPrice = monthlyPrice;
    houses[houseid].depositAmount = depositAmount;
    houses[houseid].postcode = postcode;
    houses[houseid].isHouseActive = true;
    return true;
  }
  
  function getHouseById(uint houseId) public view 
  returns (string propertyNo, string propertyAddress, 
  string postcode, string city, string houseType, uint noOfBeds) {
    return (houses[houseId].propertyNo, 
    houses[houseId].propertyAddress, 
    houses[houseId].postcode, 
    houses[houseId].city, 
    houses[houseId].houseType, 
    houses[houseId].noOfBeds);
  }
  
  
  function setHouseNotActive(uint id) public {
    houses[id].isHouseActive = false;
  }
  
  
  function getHousePricesById(uint houseId) public view returns (uint, uint) {
      /*returns house details*/
      return(houses[houseId].monthlyPrice, houses[houseId].depositAmount);
  }
  
  function isHouseActive(uint houseId) public view returns (bool success) {
      return houses[houseId].isHouseActive;
  }
  
  function getHouseCount() public view returns (uint) {
      /*returns house details*/
      return landlords.length;
  }
  
  function getLandlordList() public view returns (address[] addressess) {
      return landlords;
  }
  

  }
  
  
  
  
