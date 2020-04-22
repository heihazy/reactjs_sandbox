import React, { useState } from "react";
import Button from "./Button";
import Content from "./Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { faMeh } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [love, setLove] = useState(0);
  const [hate, setHate] = useState(0);
  const addLove = () => setLove(love + 1);
  const addHate = () => setHate(hate + 1);
  const resetVote = () => setLove(0) + setHate(0);
  // const contentStyle = {
  //   display: "none",
  // };
  // const showContent = () => {
  //   if ({ love } >= 1 || { hate } >= 1) {
  //     {contentStyle = {
  //       display: "block",
  //     };
  //   }
  // };

  return (
    <div>
      <Button click={addLove} text="Love Me">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
      <Button click={addHate} text="Hate Me">
        <FontAwesomeIcon icon={faSadCry} />
      </Button>
      <Button click={resetVote} text="Neutral">
        <FontAwesomeIcon icon={faMeh} />
      </Button>
      <Content title="Votes:"></Content>
      <Content text1="Love:">{love}</Content>
      <Content text1="Hate:">{hate}</Content>
    </div>
  );
};

export default App;
