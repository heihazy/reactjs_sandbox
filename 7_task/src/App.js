import React, { useState } from "react";

const App = () => {
  const [vote, setVote] = useState(0);
  const addLove = () => setVote(vote + 1);
  const addHate = () => setVote(vote + 1);
  const resetVote = () => setVote(0);
  return (
    <div>
      <button onClick={addLove}>Love Me</button>
      <button onClick={addHate}>Hate Me</button>
      <button onClick={resetVote}>Back to Neutral</button>
      <h1>Votes:</h1>
      <h3>Love: 0</h3>
      <h3>Hate: 0</h3>
    </div>
  );
};

export default App;
