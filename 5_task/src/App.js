import "./App.css";
import React, { Component } from "react";
import Circle from "./Circle/Circle";

class App extends Component {
  state = {
    score: 0,
  };
  render() {
    return (
      <div>
        <h1>Smack The Virus</h1>
        <h3>Your score is: 0</h3>
        <main>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </main>
        <div>
          <button>Start</button>
          <button>End</button>
        </div>
      </div>
    );
  }
}

export default App;
