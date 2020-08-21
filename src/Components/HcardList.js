import React, { Component } from "react";
import Hcard from "./Hcard";
import OutlineHeader from "./OutlineHeader";
export default class HcardList extends Component {
  render() {
    return (
      <div>
        <OutlineHeader title="Deals List" />
        <Hcard />
        <Hcard />
        <Hcard />
        <Hcard />
        <Hcard />

        <OutlineHeader title="Events List" />
        <Hcard />
        <Hcard />
        <Hcard />
        <Hcard />
        <Hcard />
      </div>
    );
  }
}
