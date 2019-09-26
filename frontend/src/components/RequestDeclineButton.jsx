import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap';
import { web3, requestContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './RemoveButton.css';

export default class RequestDeclineButton extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(e, id) {
    requestContract.declineRequest(id);
  }

  componentDidMount() { 
  }

  render() {
    const id = this.props.requestId;

    return (
      <Button onClick={(e) => this.handleClick(e, id)}>
        Decline
      </Button>
    )
  }
}
