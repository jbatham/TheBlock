import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

//Customised footer to be used across all pages
export default class Footer extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#005480", color: "white",
  		textAlign: "left"}}>
        <Row>
          <Col xs={12} sm={2} className="header">
          </Col>
          <Col xs={12} sm={4} className="header">
          <br/><br/>
          </Col>
          <Col xs={12} sm={4} className="header">
          <br/>
          &copy; {new Date().getFullYear()} Copyright:{"The Block Ltd."}
          <br/>
          <br/>
          </Col>
           <Col xs={12} sm={2} className="header">
          </Col>
        </Row>
      </div>
    )
  }
}
