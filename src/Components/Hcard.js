import React, { Component } from "react";
import "./Css/Card1.css";
import { MdDateRange } from "react-icons/md";

export default class Hcard extends Component {
  render() {
    let { title, subtitle, time, shadow, Icon } = this.props;
    return (
      <div
        className={`card card-container mb-3 text-capitalize ${
          shadow ? "shadow" : null
        }`}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              className="card-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title title">{title}</h5>
              <p className="card-text subtitle">{subtitle}</p>
              <p className="card-text">
                <MdDateRange className="mr-1" />
                <small className="text-muted time">{time}</small>
                <small style={{ float: "right" }}>
                  <Icon className="mr-1" />
                  AWS Group
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
