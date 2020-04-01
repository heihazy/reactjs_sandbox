import React, { Component } from "react";
import "./View.css";

class View extends Component {
  render() {
    return (
      <div>
        <h2>This is your input</h2>
        <p>First Name: </p>
        <p>Last Name: </p>
        <p>Phone Number: </p>
        <p>Message: </p>
      </div>
    );
  }
}

export default View;
