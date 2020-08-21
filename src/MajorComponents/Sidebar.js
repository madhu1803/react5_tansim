import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SideList from "../Components/SideList";
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ListGroup className="mt-5">
          <SideList
            title="Tansim Guidelines And Benefits Of Organisation"
            isBtn={true}
          />
        </ListGroup>

        <ListGroup className="mt-5">
          <SideList title="Incubator Linked with startups" />
          <SideList title="Ecosystem" />
          <SideList title="Resource" />
          <SideList title="Blog/News" />
          <SideList title="Applied Events" />
          <SideList title="Applied Deals" />
          <SideList title="Incubator Linked with startups" />
          <SideList title="Applied Schemes" />
          <SideList title="FAQ'S" />
        </ListGroup>
      </div>
    );
  }
}
