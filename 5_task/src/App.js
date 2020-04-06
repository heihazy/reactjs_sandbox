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

  pace = 1500;
  timer = undefined;

  next = () => {
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });
    this.timer = setTimeout(this.next, this.pace);
    console.log(this.state.current);
  };

  clickHandler = (circleID) => {
    console.log("clicked", circleID);
    this.setState({
      score: this.state.score + 1,
    });
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    clearTimeout(this.timer);
  };
  render() {
    return (
      <div>
        <h1>Smack The Virus</h1>
        <h3>Your score is: {this.state.score}</h3>
        <main>
          <Circle
            active={this.state.current === 1}
            buttonColor="lightblue"
            clicks={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            buttonColor="lightsalmon"
            clicks={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            buttonColor="lightgreen"
            clicks={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            buttonColor="lightcyan"
            clicks={this.clickHandler.bind(this, 4)}
          />
        </main>
        <div>
          <button onClick={this.startHandler}>Start</button>
          <button onClick={this.endHandler}>End</button>
        </div>
      </div>
    );
  }
}

export default App;
