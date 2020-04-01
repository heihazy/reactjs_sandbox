import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            onChange={props.handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
