import React, { Component } from 'react'
//import { supplierContract, customerContract, web3 } from "./EthereumSetup";
import { web3, housingContract } from "./../EthereumSetup";
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RegHouseForm.css'

export default class RegHouseForm extends Component {
  //This function takes the form input and calls the addUser smart contract method
  //and forwards the relevant information


//  userProfileContract_addUser(firstName, lastName, age, email, occupation) {
//        const address = web3.eth.accounts[0];
//        const status = "None";
//        const balance = 10000;
//        profileContract.addUser(address, email, firstName, lastName, age, balance, occupation, status, {
//            from: web3.eth.accounts[0],
//            gas: 200000
//        }, (err, results) => {
//            if (err) {
//                console.error('[UserProfile Contract] Error during addition of new user registration', err);
//            } else {
//                console.log('[UserProfile Contract] - New user added to system', results.toString());
//            }
//        });
//  }  

  // This function collects the values of the input elements from the registration form
  // This function gets executed upon form submission
  addNewHouse(e){
        const houseNo = e.target.elements.houseNo.value;
        const addrline = e.target.elements.addrline.value;
        const postcode = e.target.elements.postcode.value;
        const city = e.target.elements.city.value;
        const houseType = e.target.elements.houseType.value;
        const noOfRooms = e.target.elements.noOfRooms.value;
        const monthlyPrice = e.target.elements.monthlyPrice.value;
        const depositAmount = e.target.elements.depositAmount.value;
        const address = web3.eth.accounts[0];

        housingContract.addHouse(address, 
          houseNo, addrline, postcode, city, houseType, noOfRooms, monthlyPrice, depositAmount, {
            from: web3.eth.accounts[0],
            gas: 1000000,
        }, (err, results) => {
            if (err) {
                console.error('[UserProfile Contract] Error during addition of new house', err);
            } else {
                console.log('[UserProfile Contract] - New house added to system', results.toString());
            }
        });
  }

  render() {
    return (
      <form onSubmit={this.addNewHouse}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>House number or name </Button>
            </InputGroup.Button>
            <FormControl ref="houseNo" name="houseNo" placeholder="Enter house number or name" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>First line of address </Button>
            </InputGroup.Button>
            <FormControl ref="addrline" name="addrline" placeholder="Enter first line of address" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>Postcode</Button>
            </InputGroup.Button>
            <FormControl ref="postcode" name="postcode" placeholder="Enter postcode" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>City</Button>
            </InputGroup.Button>
            <FormControl ref="city" name="city" placeholder="Enter city" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>House type</Button>
            </InputGroup.Button>
            <FormControl ref="houseType" name="houseType" placeholder="House type: e.g. Flat, Semi-detached, Bungalow" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>Number of rooms </Button>
            </InputGroup.Button>
            <FormControl ref="noOfRooms" name="noOfRooms" placeholder="Enter amount of rooms" type="number"/>
          </InputGroup>
        <br/>
        <InputGroup>
            <InputGroup.Button>
              <Button>Monthly price </Button>
            </InputGroup.Button>
            <FormControl ref="monthlyPrice" name="monthlyPrice" placeholder="£ Monthly price in pounds" type="number"/>
        </InputGroup>
        <br/>
        <InputGroup>
            <InputGroup.Button>
              <Button>Deposit Amount </Button>
            </InputGroup.Button>
            <FormControl ref="depositAmount" name="depositAmount" placeholder="£ Deposit amount in pounds" type="number"/>
        </InputGroup>

        </FormGroup>
        <FormGroup>
          <Button bsStyle="primary" label="Register" id="registerButton" type="submit" active>Register</Button>
        </FormGroup>
      </form>
      )
  }
}
