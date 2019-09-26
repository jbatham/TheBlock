import React, { Component } from 'react'
//import { supplierContract, customerContract, web3 } from "./EthereumSetup";
import { web3, userProfileContract } from "./../EthereumSetup";
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RegistrationForm.css'

export default class RegistrationForm extends Component {

   componentDidMount() {
    console.log(web3.eth.accounts[0]);
  }

  // This function collects the values of the input elements from the registration form
  // This function gets executed upon form submission
  addNewUser(e){
        //e.preventDefault();
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const occupation = e.target.elements.occupation.value;
        const dob = e.target.elements.dob.value;

        const address = web3.eth.accounts[0];
        userProfileContract.addUser(address, username, email, firstName, lastName, occupation, dob, {
            from: web3.eth.accounts[0],
            gas: 200000,
        }, (err, results) => {
            if (err) {
                console.error('[UserProfile Contract] Error during addition of new user registration', err);
            } else {
                console.log('[UserProfile Contract] - New user added to system', results.toString());
            }
        });
  }

  render() {
    return (
      <form onSubmit={this.addNewUser}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>Username</Button>
            </InputGroup.Button>
            <FormControl ref="username" name="username" placeholder="Enter a username" type="text"/>
          </InputGroup>
           <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>First Name </Button>
            </InputGroup.Button>
            <FormControl ref="firstName" name="firstName" placeholder="Enter first name" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>Last Name </Button>
            </InputGroup.Button>
            <FormControl ref="lastName" name="lastName" placeholder="Enter last name" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>Date of birth</Button>
            </InputGroup.Button>
            <FormControl ref="dob" name="dob" placeholder="Enter date of birth format DD/MM/YYYY" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>Age</Button>
            </InputGroup.Button>
            <FormControl ref="age" name="age" placeholder="Enter current age" type="number"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>Email address </Button>
            </InputGroup.Button>
            <FormControl ref="email" name="email" placeholder="Enter a valid email address" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroup.Button>
              <Button>Occupation </Button>
            </InputGroup.Button>
            <FormControl ref="occupation" name="occupation" placeholder="Enter your occupation status" type="text"/>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Button bsStyle="primary" label="Register" id="registerButton" type="submit" active>Register</Button>
        </FormGroup>
      </form>
      )
  }
}
