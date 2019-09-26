import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel } from 'react-bootstrap';
import { web3, housingContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './ProfileDetails.css'
import MyListing from './MyListing';

export default class MyHousesSection extends Component {

  constructor(props) {
    super(props);
  }

  getUserHouseIds() {
    //set variables
    var userHouseIds = [];
    const address = web3.eth.accounts[0];
    //get list of landlords
    const landlordList = housingContract.getLandlordList.call();
    var i;
    //iterate over list to find houseids of user
    for (i = 0; i < landlordList.length; i++) {
      //if user is landlord
      if (landlordList[i] == address) {
        //add id to array
        userHouseIds.push(i);
      }
    }
    return userHouseIds;
  }

  render() {
  	var houses = []; //initialise houses list
  	const userHouseIds = this.getUserHouseIds();
  	var i;
    //iterate over the set of ids
    for (i = 0; i < userHouseIds.length; i++) {
    	const id = userHouseIds[i]; //get the id;
    	const houseData = housingContract.getHouseById.call(id);
    	const prices = housingContract.getHousePricesById.call(id);
      //check if the house is on the market
      if (housingContract.isHouseActive.call(i)) {
        //forward details to mylisting component
        houses.push(<MyListing
        noOfBeds={houseData[5].toString()}
        monthlyPrice={prices[0].toString()}
        propertyNo={houseData[0]}
        propertyAddress={houseData[1]}
        postcode={houseData[2]}
        city={houseData[3]}
        houseType={houseData[4]}
        depositAmount={prices[1].toString()}
        houseId={id}
        />);
      }
    }
    return (
      <div>
      	{houses}
      </div>
      )
  }
}
