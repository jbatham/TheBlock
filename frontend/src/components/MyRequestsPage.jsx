import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Panel, FormControl} from 'react-bootstrap';
import './MyProfilePage.css';
import CustomNavbar from './CustomNavbar';
import ContactSection from './ContactSection';
import RegistrationForm from './RegistrationForm';
import Header from './Header';
import SearchSection from './SearchSection';
import TenantSearch from './TenantSearch';
import RegHouseForm from './RegHouseForm';
import Footer from './Footer';
import SupportTicketBar from './SupportTicketBar';
import MyRequestsSection from './MyRequestsSection';

export default class MyRequestsPage extends Component {
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
            <h1>My Requests Page</h1>
                <MyRequestsSection/>
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