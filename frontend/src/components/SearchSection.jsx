import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SearchSection.css'

export default class SearchSection extends Component {

  render() {
    return (
      <div>
      <Panel>
      <Panel.Heading>Rooms for rent</Panel.Heading>
      <Panel.Body>
      Use this feature to find a room to rent near you.
      				Please enter a city and post code and click search! <br/>
             <br/>
              <br/>
      				<form>
      					<FormGroup>
      						<InputGroup>
            					<InputGroup.Button>
              						<Button>Location </Button>
            					</InputGroup.Button>
            					<FormControl ref="location" name="location" placeholder="Enter location" type="text"/>
          					</InputGroup>
          				</FormGroup>	
                  <br/>
      					<FormGroup>
          					<Button bsStyle="primary" label="Search" id="searchButton" type="submit" 
                    active href="/roomsearch" to="/roomsearch">Search</Button>
        				</FormGroup>
      				</form>
      </Panel.Body>
      </Panel>
      </div>
      )
  }
}
