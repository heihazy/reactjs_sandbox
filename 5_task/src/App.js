import "./App.css";
import React, { Component } from "react";
import Circle from "./Circle/Circle";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
  };

  next = () => {
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });
  };

  clickHandler = (circleID) => {
    console.log("clicked", circleID);
    this.setState({
      score: this.state.score + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Smack The Virus</h1>
        <h3>Your score is: {this.state.score}</h3>
        <main>
          <Circle clicks={this.clickHandler.bind(this, 1)} />
          <Circle clicks={this.clickHandler.bind(this, 2)} />
          <Circle clicks={this.clickHandler.bind(this, 3)} />
          <Circle clicks={this.clickHandler.bind(this, 4)} />
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
