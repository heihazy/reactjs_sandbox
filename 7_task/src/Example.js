// import React, { Component } from "react";
// import "./Example.css";

// class Example extends Component {
//   state = {
//     counter: 0,
//   };
//   addLike = () => this.setState({ counter: this.state.counter + 1 });
//   removeLike = () => this.setState({ counter: this.state.counter - 1 });
//   resetLike = () => this.setState({ counter: 0 });
//   render() {
//     return (
//       <div>
//         <h1>Total number of votes: {this.state.counter}</h1>
//         <button onClick={this.addLike}>Like</button>
//         <button onClick={this.removeLike}>Dislike</button>
//         <button onClick={this.resetLike}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Example;

import React, { useState } from "react";
import "./Example.css";

const Button = ({ click, text, children }) => {
  return (
    <>
      <button onClick={click}>
        {text} {children}
      </button>
    </>
  );
};
const Example = () => {
  const [counter, setCounter] = useState(0);
  const addLike = () => setCounter(counter + 1);
  const removeLike = () => setCounter(counter - 1);
  const resetLike = () => setCounter(0);
  return (
    <div>
      <h1>Total number of votes: {counter}</h1>
      <Button click={addLike} text="Like">
        ahihi
      </Button>
      <Button click={removeLike} text="Dislike" />
      <Button click={resetLike} text="Reset" />
    </div>
  );
};

export default Example;
