import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, Row, Col, Button } from 'react-bootstrap';
import { web3, userProfileContract, requestContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './HouseListing.css';
import RequestButton from './RequestButton';

export default class HouseListing extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { 
  }

  render() {
    const houseId = this.props.houseId;
    const landlordAddress = this.props.landlordAddress;
    const userAddress = this.props.userAddress;

    const requestButton = <RequestButton 
    houseId = {houseId}
    landlordAddress = {landlordAddress}
    userAddress = {userAddress}/>

    return (
      <div>
      <Panel>
        <Panel.Heading>
          {this.props.noOfBeds} Bedroom 
          &nbsp;&nbsp;&nbsp;&nbsp;
          £{this.props.monthlyPrice} Per Month
        </Panel.Heading>
        <Panel.Body>
          Address: {this.props.propertyNo}<br/>
          {this.props.propertyAddress}<br/>
          Postcode: {this.props.postcode}<br/>
          Location: {this.props.city}<br/>
          House Type: {this.props.houseType}<br/>
          Deposit Amount: {this.props.depositAmount}<br/>
          <br/>
          {requestButton}
	     </Panel.Body>
      </Panel>
      </div>
      )
  }
}
