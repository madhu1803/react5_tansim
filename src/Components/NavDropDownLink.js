import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";

export default class NavDropDownLink extends Component {
  render() {
    let { title } = this.props;
    return (
      <NavDropdown title={title}>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    );
  }
}
