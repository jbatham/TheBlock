import React, { Component } from 'react'
//import { supplierContract, customerContract, web3 } from "./EthereumSetup";
import { web3, userProfileContract } from "./../EthereumSetup";
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button, Col, Row, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PostAdForm.css'

export default class PostAdForm extends Component {

  postNewAdvert(e){
        e.preventDefault();
        const location = e.target.elements.location.value;
        const advert = e.target.elements.advert.value;
        
        const address = web3.eth.accounts[0];
        userProfileContract.setUserStatus(address, advert, location, {
            from: web3.eth.accounts[0]
        }, (err, results) => {
            if (err) {
                console.error('[UserProfile Contract] Error during advert change', err);
            } else {
                console.log('[UserProfile Contract] - Advert changed', results.toString());
            }
        });
  }

  render() {
    return (
      <form onSubmit={this.postNewAdvert}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>Location </Button>
            </InputGroup.Button>
            <FormControl ref="location" name="location" placeholder="Enter a city you would like to live in" type="text"/>
          </InputGroup>
          <br/><br/>
        <FormGroup controlId="formControlsTextarea">
          <Button>Description</Button> <br/>
          <FormControl ref="advert" name="advert" componentClass="textarea" placeholder="Enter your self advert here." />
        </FormGroup>
        </FormGroup>
        <FormGroup>
          <Button bsStyle="primary" label="Register" id="registerButton" type="submit" active>Post</Button>
        </FormGroup>
      </form>
      )
  }
}
