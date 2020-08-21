import React, { Component } from "react";
import Card2 from "./Card2";
import OutlineHeader from "./OutlineHeader";

export default class ConnectionRequest extends Component {
  render() {
    return (
      <div>
        <OutlineHeader title="Events List" />
        <div className="row">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    );
  }
}
