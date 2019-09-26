import React, { Component } from 'react'
import { web3, userProfileContract } from "./../EthereumSetup";
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button, Col, Row, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ChangeEmailForm extends Component {

  changeEmail(e){
        e.preventDefault();
        const email = e.target.elements.email.value;
        
        const address = web3.eth.accounts[0];
        userProfileContract.setUserEmail(address, email, {
            from: web3.eth.accounts[0]
        }, (err, results) => {
            if (err) {
                console.error('[UserProfile Contract] Error during email change', err);
            } else {
                console.log('[UserProfile Contract] - Email changed', results.toString());
            }
        });
  }

  render() {
    return (
      <form onSubmit={this.changeEmail}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>Update email</Button>
            </InputGroup.Button>
            <FormControl ref="email" name="email" placeholder="Enter new email address" type="text"/>
          </InputGroup>
          <br/>
          <InputGroup>
          	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          	<Button bsStyle="primary" label="Register" id="registerButton" type="submit" active>Change</Button>
          </InputGroup>
       	</FormGroup>
      </form>     
      )
  }
}
