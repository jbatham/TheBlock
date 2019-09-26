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
import ProfileDetails from './ProfileDetails';
import ChangeEmailForm from './ChangeEmailForm';
import ChangeOccupationForm from './ChangeOccupationForm';
import Footer from './Footer';
import SupportTicketBar from './SupportTicketBar';

export default class MyProfilePage extends Component {
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
            <h1>My Profile Page</h1>
            <ProfileDetails/>
              <Panel>
              <Panel.Heading>Edit Profile</Panel.Heading>
              	<Panel.Body>
                  <ChangeEmailForm/>
                  <br/>
                  <br/>
                  <ChangeOccupationForm/>
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