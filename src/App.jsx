import React, { Component } from "react";

import "./App.css";
import Sidebar from "./component/Sidebar";
import Widget from "./component/Widget";

export class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Widget />
      </div>
    );
  }
}

export default App;
