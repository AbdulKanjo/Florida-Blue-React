import React, { Component } from "react";
import Main from "./components/Main/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="App-intro">Florida Blue React Coding Exercise</h1>
        <Main />
      </div>
    );
  }
}

export default App;
