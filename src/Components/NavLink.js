import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export default class NavLink extends Component {
  render() {
    let { Icon } = this.props;
    return (
      <Nav.Link href="#" className="m-2">
        <Icon style={{ fontSize: "20px" }} />
      </Nav.Link>
    );
  }
}
