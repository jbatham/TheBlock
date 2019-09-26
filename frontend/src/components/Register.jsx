import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Panel, FormControl} from 'react-bootstrap';
import './Register.css';
import CustomNavbar from './CustomNavbar';
import ContactSection from './ContactSection';
import RegistrationForm from './RegistrationForm';
import Header from './Header';
import SearchSection from './SearchSection';
import TenantSearch from './TenantSearch';
import Footer from './Footer';
import SupportTicketBar from './SupportTicketBar';

export default class Register extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CustomNavbar/>
        <Row className="show-grid text-center border-between">
        <Col xs={12} sm={2} className="person-wrapper">
        </Col>
        <Col xs={12} sm={2} className="person-wrapper">
        <SearchSection/>
          <TenantSearch/>
        </Col>
          <Col xs={12} sm={4} className="person-wrapper border-between">
            <h1>Registration Page</h1>
            <Panel>
              <Panel.Heading>Registration Form</Panel.Heading>
              <Panel.Body>
                <RegistrationForm/>
              </Panel.Body>
              </Panel>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
                <ContactSection/>
                <SupportTicketBar/>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              </Col>
            </Row>
            <Footer/>
      </div>
    )
  }
}