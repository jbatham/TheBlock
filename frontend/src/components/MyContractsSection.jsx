import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel } from 'react-bootstrap';
import { web3, rentalContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './ProfileDetails.css'
import MyContract from './MyContract';

export default class MyContractsSection extends Component {

  constructor(props) {
    super(props);
  }

  getUserTenantContractIds() {
    //set variables
    var userTenantIds = [];
    const address = web3.eth.accounts[0];
    //get list of tenants
    const tenantList = rentalContract.getTenantList.call();
    var i;
    //iterate over list to find contract ids of user
    for (i = 0; i < tenantList.length; i++) {
      //if user is tenant
      if (tenantList[i] == address) {
        //add id to array
        userTenantIds.push(i);
      }
    }
    return userTenantIds;
  }

  render() {
    var contracts = []; //initialise houses list
    const userTenantIds = this.getUserTenantContractIds();
    var i;
    //iterate over the set of ids
    for (i = 0; i < userTenantIds.length; i++) {
      const id = userTenantIds[i]; //get the id;

      const contractData = rentalContract.getContractDetails.call(id);

      //check if the contract is active
      if (rentalContract.isContractActive.call(i)) {
        //forward details to my contract component
        contracts.push(<MyContract
        contractId={i}
        landlordAddress={contractData[1]}
        houseId={contractData[2].toNumber()}
        depositAmount={contractData[3].toNumber()}
        monthlyRent={contractData[4].toNumber()}
        isDepositPaid={contractData[5]}
        amountOfMonthsPaid={contractData[6].toNumber()}
        />);
      }
    }

    return (
      <div>
        {contracts}
      </div>
      )
    }
}
