import React, { Component } from "react";
import "./App.css";
import Header from "./MajorComponents/Header";
import Footer from "./MajorComponents/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
