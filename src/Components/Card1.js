import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Card1 extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "14rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>Some quick example text to build on</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
