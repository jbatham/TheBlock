import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap';
import { web3, requestContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './RequestButton.css';

export default class RequestButton extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(e, sender, rec, houseid) {
    //requestContract.addRequest.call(sender, rec, houseid);
    console.log(sender);
    console.log(rec);
    console.log(houseid);
    console.log("success");
    requestContract.addRequest(sender, rec, houseid, {
        from: web3.eth.accounts[0],
        gas: 1000000,
    }, (err, results) => {
        if (err) {
            console.error('[Request Contract] Error during addition of new request', err);
        } else {
            console.log('[Request Contract] - New request added', results.toString());
          }
        });

  }

  componentDidMount() { 
  }

  render() {
    const sender = this.props.userAddress;
    const receiver = this.props.landlordAddress;
    const houseid = this.props.houseId;

    return (
      <Button onClick={(e) => this.handleClick(e, sender, receiver, houseid)}>
        Request to rent
      </Button>
    )
  }
}
