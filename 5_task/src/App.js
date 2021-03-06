import "./App.css";
import React, { Component } from "react";
import Circle from "./Circle/Circle";
import GameOver from "./GameOver/GameOver";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    if (this.state.rounds >= 3) {
      this.endHandler();
    }
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    console.log(this.state.current);
  };

  clickHandler = (circleID) => {
    let audio = new Audio("/cartoon-punch.mp3");
    console.log("clicked", circleID);
    // check if click right circle
    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }
    audio.play();
    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
    let gameoverAudio = new Audio("/game-over.mp3");
    gameoverAudio.play();
    // setTimeout(function () {
    //   gameoverAudio.pause();
    // }, 2000);
    this.next = "";
  };

  render() {
    return (
      <div>
        <h1>Smack Corona</h1>
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
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
