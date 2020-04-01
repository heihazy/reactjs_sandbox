import "./View.css";
import React from "react";

const View = props => {
  return (
    <div className="view">
      <h2>This is your input</h2>
      <div className="lines"></div>
      <div className="preview">
        <p>
          First Name: <span>{props.firstName}</span>
        </p>
        <p>
          Last Name: <span>{props.lastName}</span>
        </p>
        <p>
          Phone Number: <span>{props.phoneNumber}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
