import React, { Component } from 'react'
import { web3, userProfileContract } from "./../EthereumSetup";
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button, Col, Row, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ChangeOccupationForm extends Component {

    changeOccupation(e){
        e.preventDefault();
        const occupation = e.target.elements.occupation.value;
        
        const address = web3.eth.accounts[0];
        userProfileContract.setUserOccupation(address, occupation, {
            from: web3.eth.accounts[0]
        }, (err, results) => {
            if (err) {
                console.error('[UserProfile Contract] Error during occupation change', err);
            } else {
                console.log('[UserProfile Contract] - Occupation changed', results.toString());
            }
        });
  }

  render() {
    return (
       <form onSubmit={this.changeOccupation}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>Update Occupation</Button>
            </InputGroup.Button>
            <FormControl ref="occupation" name="occupation" placeholder="Enter new occupation status" type="text"/>
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
