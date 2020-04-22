import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  const [love, setLove] = useState(0);
  const [hate, setHate] = useState(0);
  const addLove = () => setLove(love + 1);
  const addHate = () => setHate(hate + 1);
  const resetVote = () => setLove(0) + setHate(0);
  return (
    <div>
      <Button click={addLove} text="Love Me"></Button>
      <Button click={addHate} text="Hate Me"></Button>
      <Button click={resetVote} text="Neutral"></Button>
      <h1>Votes:</h1>
      <h3>Love: {love}</h3>
      <h3>Hate: {hate}</h3>
    </div>
  );
};

export default App;
