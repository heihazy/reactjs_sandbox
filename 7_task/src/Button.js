import React, { useState } from "react";

const Button = ({ click, text, children }) => {
  return (
    <>
      <button onClick={click}>
        {text} {children}
      </button>
    </>
  );
};

export default Button;
