import React from "react";
import "./Content.css";

const Content = ({ love, hate }) => {
  if (love === 0 && hate === 0) {
    return (
      <div className="content">
        <h1>If you are curious, you must rate me to see</h1>
        <h1>Time to raise your voice</h1>
      </div>
    );
  }
  return (
    <div className="content">
      <h1>Votes:</h1>
      <h3>Love: {love} </h3>
      <h3>Hate: {hate} </h3>
    </div>
  );
};

export default Content;
