import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TenantSearch.css'

export default class TenantSearchSection extends Component {

  render() {
    return (
      <div>
      <Panel>
      <Panel.Heading>Tenant search</Panel.Heading>
      <Panel.Body>Use this feature to find tenants near you. Enter a city or postcode
      and click search! <br/>
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
      					<FormGroup>
          				<Button bsStyle="primary" label="Search" id="searchButton" type="submit" active href="/tenantsearch" to="/tenantsearch">Search</Button>
        				</FormGroup>
      				</form>
      </Panel.Body>
      </Panel>
      <br/>
      </div>
      )
  }
}
