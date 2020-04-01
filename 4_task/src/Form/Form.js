import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="first-name">First Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
