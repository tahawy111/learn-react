import React, { Component } from "react";

export class TestComp extends Component {
  state = {
    ptoduct: "laptop",
  };
  render() {
    return <div>{this.state.ptoduct}</div>;
  }
}

export default TestComp;
