import React, { Component } from "react";
import "./Css/Card2.css";
import { Card } from "react-bootstrap";

export default class Card2 extends Component {
  render() {
    let { title, subtitle, text, subtext, time } = this.props;
    return (
      <div className="col-lg-4 mb-4">
        <Card className="card-container text-capitalize card2">
          <Card.Body className="mt-2">
            <Card.Title className="card2-title">{title}</Card.Title>
            <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle>
            <Card.Text>
              <p className="main-text">
                <strong>{text}</strong>
              </p>
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
