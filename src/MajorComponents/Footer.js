import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <Card className="mt-5">
        <Card.Body>
          <Card.Text>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <p>Contact Us</p>
                  <p>
                    {" "}
                    Send An Email.Call Us,What You Want,We'll Be Waiting For
                    You.
                  </p>
                </div>
                <div className=" col-lg-4">
                  <p>madhumithaa@gmail.com</p>
                  <p>+91 928675320</p>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
