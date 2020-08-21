import React, { Component } from "react";
export default class Hcard extends Component {
  render() {
    let { title, subtitle, time, shadow, Icon } = this.props;
    return (
      <div
        class={`card mb-3 text-capitalize ${shadow ? "shadow" : null}`}
        style={{ border: "none !important" }}
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              class="card-img"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{subtitle}</p>
              <p class="card-text">
                <small class="text-muted">{time}</small>
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
