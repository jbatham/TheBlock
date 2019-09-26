import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { web3, supportTicketContract } from "./../EthereumSetup";
import './SupportTicketBar.css'

export default class SupportTicketBar extends Component {

  createSupportTicket(e) {
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const question = e.target.elements.question.value;
    const address = web3.eth.accounts[0];

    supportTicketContract.createTicket(address, 
    subject, question, email, {
        from: web3.eth.accounts[0],
        gas: 1000000,
    }, 
    (err, results) => {
            if (err) {
                console.error('[SupportTicket Contract] Error during creation of ticket', err);
            } else {
                console.log('[SupportTicket Contract] - Ticket added', results.toString());
            }});    
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>Still having issues?</Panel.Heading>
          <Panel.Body>Send us a message using the form below <br/>
            and we will get back to you via email!<br/><br/>
      			<form onSubmit={this.createSupportTicket}>
      				<FormGroup>
      					<InputGroup>
            			<InputGroup.Button>
              			<Button>Email </Button>
            			</InputGroup.Button>
            			<FormControl ref="email" name="email" placeholder="" type="text"/>
          			</InputGroup>
                <br/>
                <InputGroup>
                  <InputGroup.Button>
                    <Button>Subject </Button>
                  </InputGroup.Button>
                  <FormControl ref="subject" name="subject" placeholder="" type="text"/>
                </InputGroup>
          		</FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <FormControl ref="question" name="question" componentClass="textarea" 
                placeholder="Enter your question here." />
              </FormGroup>	
      				<FormGroup>
          			<Button bsStyle="primary" label="submit" id="searchButton" type="submit" active>Submit</Button>
        			</FormGroup>
      			</form>
          </Panel.Body>
        </Panel>
        <br/>
      </div>
      )
  }
}
