import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, Row, Col, Button } from 'react-bootstrap';
import { web3, housingContract, userProfileContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './MyRequest.css';
import PayRentButton from './PayRentButton';
import PayDepositButton from './PayDepositButton';

export default class MyContract extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() { 
  }

  render() {
    //get prop values passed down
    const contractId = this.props.contractId;
    const landlordAddress = this.props.landlordAddress;
    const houseId = this.props.houseId;
    const userAddress = web3.eth.accounts[0];
    const depositAmount = this.props.depositAmount
    const monthlyRent = this.props.monthlyRent
    const isDepositPaid = this.props.isDepositPaid
    const amountOfMonthsPaid = this.props.amountOfMonthsPaid

    //get landlord details
    const landlordDetails = userProfileContract.getUserInfo(landlordAddress);

    //get values 
    const firstName = landlordDetails[1];
    const lastName = landlordDetails[2];
    const email = landlordDetails[3];

    const payDepositButton = <PayDepositButton 
    userAddress={userAddress} landlordAddress={landlordAddress}
    contractId={contractId} amount={depositAmount}/>

    const payRentButton = <PayRentButton 
    userAddress={userAddress} landlordAddress={landlordAddress}
    contractId={contractId} amount={depositAmount}/>

    return (
      <Panel>
        <Panel.Heading>
        Contract ID: {contractId}, &nbsp;HouseID: {houseId}
        </Panel.Heading>
        <Panel.Body>
          -&nbsp;Landlord Details&nbsp;-<br/>
          Firstname:{firstName}<br/>
          Lastname:{lastName}<br/>
          Contact email:{email}<br/>
          <br/>
          -&nbsp;Contract Details&nbsp;-<br/>
          Monthly Rent:{monthlyRent}<br/>
          Deposit Amount:{depositAmount}<br/>
          Deposit Paid:{isDepositPaid}No<br/>
          Months Paid:{amountOfMonthsPaid}<br/>
          <br/><br/>
          {payDepositButton}
          <br/><br/>
          {payRentButton}
          <br/><br/>
          <Button>File Dispute</Button>
	       </Panel.Body>
      </Panel>
      )
  }
}
