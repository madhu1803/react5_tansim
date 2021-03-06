import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Css/Header.css";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineShareAlt, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import NavDropDownLink from "../Components/NavDropDownLink";
import NavLink from "../Components/NavLink";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" className="navbar-container">
        <Navbar.Brand href="#home">
          <img
            src="https://tansim.in/static/media/tansim.9bcbcc57.png"
            width="120"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropDownLink title="About" />
            <NavDropDownLink title="For Sartups" />
            <NavDropDownLink title="For Enabler" />
            <NavDropDownLink title="EcoSystem" />
            <NavLink Icon={BiDotsVerticalRounded} />
          </Nav>
          <Nav className="ml-auto">
            <NavLink Icon={MdNotificationsNone} />
            <NavLink Icon={AiOutlineShareAlt} />
            <NavLink Icon={CgProfile} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
