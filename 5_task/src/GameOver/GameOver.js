import React from "react";
import "./GameOver.css";
const closeOverlay = () => {
  window.location.reload();
};
const GameOver = (props) => {
  return (
    <div className="overlay" onClick={closeOverlay}>
      <div className="popup">
        <div>
          <h2>Oops it's over!!!</h2>
          <p>You have smacked: {props.score} coronas </p>
        </div>
        <button onClick={closeOverlay}>Close</button>
      </div>
    </div>
  );
};

export default GameOver;
