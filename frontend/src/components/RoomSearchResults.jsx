import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Panel, FormControl} from 'react-bootstrap';
import './RoomSearchResults.css';
import CustomNavbar from './CustomNavbar';
import ContactSection from './ContactSection';
import Header from './Header';
import SearchSection from './SearchSection';
import TenantSearch from './TenantSearch';
import HouseListing from './HouseListing';
import { web3, housingContract } from "./../EthereumSetup";
import Footer from './Footer';
import SupportTicketBar from './SupportTicketBar';

export default class RoomSearchResults extends Component {

  render() {
  	const houseCount = housingContract.getHouseCount();

  	var elements=[];
    const landlords = housingContract.getLandlordList.call();
  	var i;
  	for (i = 0; i < houseCount; i++) {
    	const houseData = housingContract.getHouseById.call(i);
    	const prices = housingContract.getHousePricesById.call(i);
      const address = web3.eth.accounts[0];
      const landlord = landlords[i];
        //if house is on the market
          elements.push(<HouseListing 
          houseId={i}
          landlordAddress={landlords[i]}
          userAddress={address}
          noOfBeds={houseData[5].toString()}
          monthlyPrice={prices[0].toString()}
          propertyNo={houseData[0]}
          propertyAddress={houseData[1]}
          postcode={houseData[2]}
          city={houseData[3]}
          houseType={houseData[4]}
          depositAmount={prices[1].toString()}
          />);
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
            <h1>Search Results</h1>
            {elements}
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