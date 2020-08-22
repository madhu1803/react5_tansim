import React, { Component } from "react";

export default class OutlineHeader extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="mt-5">
        <p className="text-muted">
          {title} <strong style={{ float: "right" }}>View All</strong>
          <hr />
        </p>
        <br />
      </div>
    );
  }
}
