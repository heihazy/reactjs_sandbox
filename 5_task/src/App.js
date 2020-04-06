import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    score: 0,
  };
  render() {
    return (
      <div>
        <h1>Smash The Virus</h1>
        <h3>Your score is: 0</h3>
        <button>Start</button>
        <button>End</button>
      </div>
    );
  }
}

export default App;
