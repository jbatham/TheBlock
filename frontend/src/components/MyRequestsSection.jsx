import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel } from 'react-bootstrap';
import { web3, requestContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './MyRequestsSection.css'
import MyRequest from './MyRequest';
//import MyListing from './MyListing';

export default class MyRequestsSection extends Component {

  constructor(props) {
    super(props);
  }

  getUserRequestIds() {
    //set variables
    var userRequestIds = [];
    const address = web3.eth.accounts[0];
    //get list of requests receivers
    const receiversList = requestContract.getLandlordList.call();
    console.log(receiversList.length);
    var i;
    //iterate over list to find houseids of user
    for (i = 0; i < receiversList.length; i++) {
      //if user is landlord
      if (receiversList[i] == address) {
        //add id to array
        userRequestIds.push(i);
      }
    }
    return userRequestIds;
  }

  render() {
  	var requests = []; //initialise request list
  	const userRequestIds = this.getUserRequestIds();
  	var i;
    //iterate over the set of requests
    for (i = 0; i < userRequestIds.length; i++) {
    	const id = userRequestIds[i]; //get the id;

      //retrieve appropriate data
      const requestData = requestContract.getRequestById.call(id);
      const requestStatus = requestData[3];
      const houseId = requestData[2].toNumber();
      const senderAddress = requestData[0];
      //if the request is pending
      if (requestStatus == 'Pending') {
        requests.push(<MyRequest
        requestId={id}
        senderAddress={senderAddress}
        houseId={houseId}
          />);
        }
      }
    
    return (
      <div>
      	{requests}
      </div>
    )
  }
}
