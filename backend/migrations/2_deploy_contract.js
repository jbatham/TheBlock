var HouseListings = artifacts.require("./HouseListings.sol")
var UserProfiles = artifacts.require("./UserProfiles.sol")
var Requests = artifacts.require("./Requests.sol")
var SupportTickets = artifacts.require("./SupportTickets.sol") 
var RentalContracts = artifacts.require("./RentalContracts.sol") 

module.exports = function(deployer) {

  deployer.deploy(HouseListings, {gas: 100000000});
  deployer.deploy(UserProfiles);
  deployer.deploy(Requests);
  deployer.deploy(SupportTickets);
  deployer.deploy(RentalContracts);
  };
  