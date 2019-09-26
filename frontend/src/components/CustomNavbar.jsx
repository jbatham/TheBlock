import React, { Component } from 'react'
import './CustomNavbar.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/" to="/postad">
              Post an advert
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/" to="/housereg">
              Register a room
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/" to="/myrooms">
              My Room Listings
            </NavItem>
            <NavItem eventKey={7} componentClass={Link} href="/" to="/requests">
              My Requests
            </NavItem>
            <NavItem eventKey={7} componentClass={Link} href="/" to="/mycontracts">
              My Contracts
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
