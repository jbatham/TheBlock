import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap';
import { web3, housingContract } from "./../EthereumSetup";
import { Link } from 'react-router-dom';
import './RemoveButton.css';

export default class RemoveButton extends Component {

  constructor(props) {
    super(props);
    //this.state = { houseId:""};
  }

  handleClick(e, id) {
    housingContract.setHouseNotActive(id);
  }

  componentDidMount() { 
    //this.setState({ houseId: this.props.houseId })
  }

  render() {
    const id = this.props.value;

    return (
      <Button onClick={(e) => this.handleClick(e, id)} bsStyle="danger">
        Remove
      </Button>
    )
  }
}
