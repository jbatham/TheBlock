import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap';
import { web3, requestContract, housingContract, rentalContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './RequestAcceptButton.css';

export default class RequestAcceptButton extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(e, reqId, tenantAddress, 
  landlordAddress, houseId, monthlyRent, depositAmount) {
    requestContract.acceptRequest(reqId);
    housingContract.setHouseNotActive(houseId);
    const prices = housingContract.getHousePricesById(houseId);
    const deposit = prices[1].toNumber();
    const monthly = monthlyRent.toNumber();

    rentalContract.bindContract(tenantAddress, 
    landlordAddress, houseId, deposit, monthly, {
      from: web3.eth.accounts[0],
      gas: 2000000,
      }, (err, results) => {
      if (err) {
        console.error('[Rental Contract] Error during addition of contract binding', err);
      } else {
        console.log('[Rental Contract] - Contract bound', results.toString());
      }
      });
  }

  componentDidMount() { 
  }

  render() {
    const reqId = this.props.requestId;
    const tenantAddress = this.props.tenantAddress;
    const landlordAddress = this.props.landlordAddress;
    const houseId = this.props.houseId;
    const monthlyRent = this.props.monthlyRent;
    const depositAmount = this.props.depositAmount;

    return (
      <Button onClick={(e) => this.handleClick(e, reqId, tenantAddress,
        landlordAddress, houseId, monthlyRent, depositAmount)}>
        Accept
      </Button>
    )
  }
}
