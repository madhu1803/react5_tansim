import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export default class MainAlert extends Component {
  render() {
    return (
      <Alert variant="danger" className="mt-5">
        <p className="text-dark text-capitalize">
          please wait 3-4 Working Days.
          <br />
          After finished working{" "}
          <span className="text-danger text-uppercase">Verification </span>
          ,we'll call you soon
        </p>
      </Alert>
    );
  }
}
