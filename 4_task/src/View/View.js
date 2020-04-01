import "./View.css";
import React from "react";

const View = props => {
  return (
    <div>
      <h2>This is your input</h2>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName} </p>
      <p>Phone Number: {props.phoneNumber} </p>
      <p>Message: {props.message} </p>
    </div>
  );
};

export default View;
