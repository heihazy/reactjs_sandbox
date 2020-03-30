import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends Component {
  state = {
    likes: 0
  };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  removeLike = () => {
    this.setState({
      likes: this.state.likes - 1
    });
  };

  reset = () => {
    this.setState({
      likes: 0
    });
  };
  render() {
    return (
      <div>
        <Header />
        <main className="counter">
          <h1
            className={
              this.state.likes === 0
                ? "likes"
                : this.state.likes % 2 === 0
                ? "likes even"
                : "likes odd"
            }
          >
            Total Likes: {this.state.likes}
          </h1>
          <button onClick={this.addLike}>Like</button>
          <button onClick={this.removeLike}>Dislike</button>
          <button onClick={this.reset}>Reset</button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
