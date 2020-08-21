import React, { Component } from "react";
import HcardList from "../Components/HcardList";
import ConnectionRequest from "../Components/ConnectionRequest";
export default class MainBody extends Component {
  render() {
    return (
      <div>
        <ConnectionRequest />
        <HcardList />
      </div>
    );
  }
}
