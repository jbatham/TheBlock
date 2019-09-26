import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import Home from './components/Home';
import Register from './components/Register';
import RegHousePage from './components/RegHousePage';
import PostAdPage from './components/PostAdPage';
import MyProfilePage from './components/MyProfilePage';
import MyRequestsPage from './components/MyRequestsPage';
import MyHousesPage from './components/MyHousesPage';
import MyContractsPage from './components/MyContractsPage';
import TenantSearchResults from './components/TenantSearchResults';
import RoomSearchResults from './components/RoomSearchResults';
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }
  //<Route path="/news" component={News} />
  render() {
    return (
      <div className="App">
        <Router>
        <div>
         <Route exact path="/" component={Home} />
         <Route path="/register" component={Register} />
         <Route path="/housereg" component={RegHousePage} />
         <Route path="/postad" component={PostAdPage} />
         <Route path="/myprofile" component={MyProfilePage} />
         <Route path="/myrooms" component={MyHousesPage} />
         <Route path="/requests" component={MyRequestsPage} />
         <Route path="/mycontracts" component={MyContractsPage} />
         <Route path="/tenantsearch" component={TenantSearchResults} />
         <Route path="/roomsearch" component={RoomSearchResults} />

        </div>
        </Router>
      </div>
    );
  }
}

export default App;
