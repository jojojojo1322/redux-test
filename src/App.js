import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>HIHI</h1>
      </div>
    );
  }
}

export default App;
