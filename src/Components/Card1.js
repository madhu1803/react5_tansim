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
              <GiPlainCircle className="mr-4" />
              <Button variant="primary" className="btn-sm">
                Primary
              </Button>{" "}
              <Button variant="outline-danger" className="btn-sm">
                Danger
              </Button>{" "}
            </Card.Title>
            <Card.Subtitle className="mt-4 text-muted">{title}</Card.Subtitle>
            <Card.Text>{subtitle}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
