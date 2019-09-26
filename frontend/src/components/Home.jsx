import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';
import './Home.css';
import CustomNavbar from './CustomNavbar';
import Header from './Header';
import ContactSection from './ContactSection';
import SearchSection from './SearchSection';
import TenantSearch from './TenantSearch';
import Footer from './Footer';
import SupportTicketBar from './SupportTicketBar';

export default class Home extends Component {

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
            <h1> Home Page </h1>
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
      //</Grid>
    )
  }
}
