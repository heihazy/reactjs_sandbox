import React, { Component } from "react";
import "./App.css";
import Form from "./Form/Form";
import View from "./View/View";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/6vj5quVNRhoQw/giphy.gif"
          alt="typing cat"
        ></img>
        <Form handleInputChange={this.handleInputChange} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
