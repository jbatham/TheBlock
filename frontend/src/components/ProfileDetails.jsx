import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel } from 'react-bootstrap';
import { web3, userProfileContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './ProfileDetails.css'

export default class ProfileDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      occupation: '',
      dob: '',
      advert: '',
      advertlocation: ''
    }
  }

  componentDidMount() { 
    this.userProfileContract_getUserStatus();
    this.userProfileContract_getUserDetails();
  }

  userProfileContract_getUserStatus() {
    const address = web3.eth.accounts[0];
    const status = userProfileContract.getUserAdvert.call(address);
    this.setState({ advert: status })
    console.log(status);
  }

  userProfileContract_getUserDetails() {
    const address = web3.eth.accounts[0];

    const result = userProfileContract.getUserInfo.call(address);
    const _username = result[0];
    const _firstname = result[1];
    const _lastname = result[2];
    const _email = result[3];
    const _occupation = result[4];

    this.setState({ username: _username });
    this.setState({ firstname: _firstname });	
    this.setState({ lastname: _lastname });
    this.setState({ email: _email });
    this.setState({ occupation: _occupation });
  }

  render() {
    return (
      <div>
      <Panel>
      <Panel.Heading>My Details</Panel.Heading>
      <Panel.Body>
      Username: {this.state.username}<br/>
      Firstname: {this.state.firstname}<br/>
      Lastname: {this.state.lastname}<br/>
      Email: {this.state.email}<br/>
      Occupation: {this.state.occupation}<br/>
      Current advert: {this.state.advert}<br/>
	  </Panel.Body>
      </Panel>
      </div>
      )
  }
}
