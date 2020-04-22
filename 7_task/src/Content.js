import React from "react";

const Content = ({ title, text1, text2, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>
        {text1} {children}
      </h3>
    </>
  );
};

export default Content;
