import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap';
import { web3, requestContract, housingContract, rentalContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './RequestAcceptButton.css';

export default class PayDepositButton extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(e, tenantAddress, 
  landlordAddress, contractId, amount) {
    //const price = amount.toNumber();
    rentalContract.payDeposit(tenantAddress, 
    landlordAddress, contractId, amount, {
      from: web3.eth.accounts[0],
      gas: 2000000,
      }, (err, results) => {
      if (err) {
        console.error('[Rental Contract] Error during deposit pay', err);
      } else {
        console.log('[Rental Contract] - Deposit Paid', results.toString());
      }
      });
  }

  componentDidMount() { 
  }

  render() {
    const tenantAddress = this.props.userAddress;
    const landlordAddress = this.props.landlordAddress;;
    const contractId = this.props.contractId;
    const amount = this.props.amount;

    return (
      <Button onClick={(e) => this.handleClick(e, tenantAddress,
        landlordAddress, contractId, amount)}>
        Pay Deposit
      </Button>
    )
  }
}
