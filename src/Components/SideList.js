import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class SideList extends Component {
  render() {
    let { title, isBtn } = this.props;
    return <ListGroup.Item>{title}</ListGroup.Item>;
  }
}
