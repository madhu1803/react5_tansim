import React, { Component } from "react";
import "./Css/Card2.css";
import { Card } from "react-bootstrap";

export default class Card2 extends Component {
  render() {
    let { title, subtitle, text, subtext, time } = this.props;
    return (
      <div className="col-lg-4 mb-4">
        <Card className="card-container text-capitalize">
          <Card.Body className="mt-2">
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-5 text-muted">
              {subtitle}
            </Card.Subtitle>
            <Card.Text>
              <p>{text}</p>
              <small>{subtext}</small>
              <br />
              <small className="text-muted">{time}</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
