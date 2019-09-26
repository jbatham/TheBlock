import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Panel, FormControl} from 'react-bootstrap';
import './TenantSearchResults.css';
import CustomNavbar from './CustomNavbar';
import ContactSection from './ContactSection';
import Header from './Header';
import SearchSection from './SearchSection';
import TenantSearch from './TenantSearch';
import { web3, userProfileContract } from "./../EthereumSetup";
import UserAdvert from './UserAdvert';
import Footer from './Footer';
import SupportTicketBar from './SupportTicketBar';

export default class TenantSearchResults extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.getAllAdvertInfo();
  }

  render() {
    const result = userProfileContract.getUserAddresses();
    const userCount = result.length;

    var elements=[];
    var i;
    for (i = 0; i < userCount; i++) {
      const result = userProfileContract.getUserAdvertByIndex.call(i);
      console.log(result);
      elements.push(<UserAdvert 
      firstname={result[4]} 
      username={result[6]}
      email={result[5]} 
      occupation={result[7]} 
      advertLocation={result[2]}  
      advert={result[1]}  
      /> );
    }

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
            <h1>Tenant Search Results</h1>
            <div>
            {elements}
            </div>
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