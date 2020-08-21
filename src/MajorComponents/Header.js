import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import NavDropDownLink from "../Components/NavDropDownLink";
import NavLink from "../Components/NavLink";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropDownLink title="About" />
            <NavDropDownLink title="For Sartups" />
            <NavDropDownLink title="For Enabler" />
            <NavDropDownLink title="EcoSystem" />
            <NavLink />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
