import React, { Component } from "react";
import "./Css/Card1.css";
import { GiPlainCircle } from "react-icons/gi";
import { Card, Button } from "react-bootstrap";

export default class Card1 extends Component {
  render() {
    let { title, subtitle, shadow } = this.props;
    return (
      <div className="col-lg-4 mb-4 text-capitalise">
        <Card className={`card-container ${shadow ? "shadow" : null}`}>
          <Card.Body>
            <Card.Title>
              <GiPlainCircle className="round-icon mr-4" />
              <Button variant="primary" className="btn-sm">
                Connect
              </Button>{" "}
              <Button variant="outline-danger" className="btn-sm">
                Reject
              </Button>{" "}
            </Card.Title>
            <Card.Subtitle className="mt-2 title">
              <strong>{title}</strong>
            </Card.Subtitle>
            <Card.Text className="subtitle">{subtitle}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
