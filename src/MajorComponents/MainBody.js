import React, { Component } from "react";
import ConnectionRequest from "../Components/ConnectionRequest";
import EventsList from "../Components/EventsList";
import HcardList from "../Components/HcardList";

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <ConnectionRequest />
        <EventsList />
        <HcardList />
      </div>
    );
  }
}
