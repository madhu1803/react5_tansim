import React, { Component } from "react";
import "./App.css";
import Header from "./MajorComponents/Header";
import Sidebar from "./MajorComponents/Sidebar";
import Footer from "./MajorComponents/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">hello</div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
