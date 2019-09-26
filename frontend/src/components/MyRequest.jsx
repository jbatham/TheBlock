import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, Row, Col, Button } from 'react-bootstrap';
import { web3, housingContract, userProfileContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './MyRequest.css';
import RequestDeclineButton from './RequestDeclineButton';
import RequestAcceptButton from './RequestAcceptButton';

export default class MyRequest extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() { 
  }

  render() {
    //get prop values passed down
    const reqId = this.props.requestId
    const houseId = this.props.houseId;
    //console.log("hoouz " + houseId);
    const tenantAddress = this.props.senderAddress;
    const userAddress = web3.eth.accounts[0];

    //get price details
    const prices = housingContract.getHousePricesById(houseId);
    //get tenant details
    const tenantdetails = userProfileContract.getUserInfo(tenantAddress);

    //get values 
    const firstName = tenantdetails[1];
    const lastName = tenantdetails[2];
    const email = tenantdetails[3];
    const occupation = tenantdetails[4];
    const monthlyRent = prices[0].toString();
    const depositAmount = prices[1].toNumber();

    const declineButton = <RequestDeclineButton requestId={reqId}/>
    const acceptButton = <RequestAcceptButton tenantAddress={tenantAddress} landlordAddress={userAddress} 
    houseId={houseId} monthlyRent={prices[0]} depositAmount={depositAmount} requestId={reqId}/>

    return (
      <Panel>
        <Panel.Heading>
        RequestID: {reqId}, &nbsp;HouseID: {houseId}
        </Panel.Heading>
        <Panel.Body>
          -&nbsp;Tenant Details&nbsp;-<br/>
          Firstname:{firstName}<br/>
          Lastname:{lastName}<br/>
          Contact email:{email}<br/>
          Occupation:{occupation}<br/>
          <br/>
          -&nbsp;Agreed Prices&nbsp;-<br/>
          Monthly Rent:{monthlyRent}<br/>
          Deposit Amount:{depositAmount}<br/>
          <br/>
          {acceptButton}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {declineButton}
	       </Panel.Body>
      </Panel>
      )
  }
}
