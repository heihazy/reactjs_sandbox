import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    score: 0,
  };
  render() {
    return (
      <div>
        <h1>Speed Game</h1>
        <h2>Your score is: {this.state.score}</h2>
        <button onClick={startGame}>Start</button>
        <button onClick={endGame}>End</button>
      </div>
    );
  }
}

export default App;
