import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ContactSection.css'

export default class ContactSection extends Component {
  render() {
    return (
      <div>
      <Panel>
      <Panel.Heading>Looking for help?</Panel.Heading>
      <Panel.Body>You can contact us by email at&nbsp; 
      <a href = "mailto: support@theblockcompany.com">
      support@theblockcompany.com
      </a> 
      &nbsp; or fill in a support ticket below </Panel.Body>
      </Panel>
      </div>
      )
  }
}
