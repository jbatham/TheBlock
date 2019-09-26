import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, Row, Col, Button } from 'react-bootstrap';
import { web3, housingContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './MyListing.css';
import RemoveButton from './RemoveButton';

export default class MyListing extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { 

  }

  render() {
    console.log(this.props.houseId);
    const id = this.props.houseId;
    const removeButton = <RemoveButton value={id}/>

    return (
      <div>
      <Panel>
        <Panel.Heading>
        HouseID: {this.props.houseId}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {removeButton}
        </Panel.Heading>
        <Panel.Body>
          Address: {this.props.propertyNo}<br/>
          {this.props.propertyAddress}<br/>
          Postcode: {this.props.postcode}<br/>
          City: {this.props.city}<br/>
          Type: {this.props.houseType}<br/>
          Bedrooms: {this.props.noOfBeds}<br/>
          Deposit: {this.props.depositAmount}<br/>
          Monthly Price: {this.props.monthlyPrice}<br/>
	       </Panel.Body>
      </Panel>
      </div>
      )
  }
}
