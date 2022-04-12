import React, { Component } from "react";
import TestComp from "./component/TestComp";
import TestHComp from "./component/TestHComp";
import "./App.css";

export class App extends Component {
  state = {};
  componentDidMount() {
    console.log("hello");
  }
  render() {
    return (
      <div>
        <TestComp />
        <TestHComp />
      </div>
    );
  }
}

export default App;
