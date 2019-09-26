import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, Row, Col } from 'react-bootstrap';
import { web3, userProfileContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './UserAdvert.css';

export default class UserAdvert extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { 
  }

  render() {
    return (
      <div>
      <Panel>
        <Panel.Heading>{this.props.username}</Panel.Heading>
        <Panel.Body>
          Name: {this.props.firstname}<br/>
          Username: {this.props.username}<br/>
          Email: {this.props.email}<br/>
          Occupation: {this.props.occupation}<br/>
          Location: {this.props.advertLocation}<br/>
          Description: {this.props.advert}<br/>
	       </Panel.Body>
      </Panel>
      </div>
      )
  }
}
