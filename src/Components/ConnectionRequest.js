import React, { Component } from "react";
import Card1 from "./Card1";
import OutlineHeader from "./OutlineHeader";

export default class ConnectionRequest extends Component {
  render() {
    return (
      <div>
        <OutlineHeader title="Connection Request" />
        <div className="row">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
    );
  }
}
