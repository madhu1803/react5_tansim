import React, { Component } from "react";
import Card1 from "./Card1";
export default class ConnectionRequest extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-lg-4">
            <Card1 />
          </div>
          <div className="col-lg-4">
            <Card1 />
          </div>
          <div className="col-lg-4">
            <Card1 />
          </div>
        </div>
      </div>
    );
  }
}
