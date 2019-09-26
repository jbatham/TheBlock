import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from'./logo.png';
//<img  src={logo} alt="logo" height="200"/> <br/><br/><br/>
//Customised header to be used across all pages
export default class Header extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={2} className="header">
           <br/> <br/> <br/>
          </Col>
          <Col xs={12} sm={6} className="header">
          <h1>The Block - A decentralised home sharing application</h1>
          </Col>
          <Col xs={12} sm={4} className="header">
            <br/>
            <Button href="/register" to="/register">
              Register
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button>
              Login
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button href="/myprofile" to="/myprofile">
              My Profile
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}
