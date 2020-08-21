import React, { Component } from "react";
import Card1 from "./Card1";
import OutlineHeader from "./OutlineHeader";

export default class ConnectionRequest extends Component {
  render() {
    return (
      <div>
        <OutlineHeader title="Connection Request" />
        <div className="row">
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
            shadow={true}
          />
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
          />
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
          />
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
          />
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
          />
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
          />
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
          />
          <Card1
            title="Prodjar"
            subtitle="Design Development,seo branding & development kits."
          />
        </div>
      </div>
    );
  }
}
