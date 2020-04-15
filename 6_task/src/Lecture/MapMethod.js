// import React from "react";

//map method
// const MapMethod = () => {
//   const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   conststa listItems = myArray.map((number) => <li>{number}</li>);
//   return <div>{listItems}</div>;
// };

// export default MapMethod;

import React, { Component } from "react";

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class MapMethod extends Component {
  state = {
    numbers: myArray,
  };
  removeHandler = (listIndex) => {
    //const oldArray = this.state.numbers
    //make a copy of it first then do other things then overwrite
    //slice() and spread methods do the copy
    // const oldArray = this.state.numbers.slice();
    const oldArray = [...this.state.numbers];

    oldArray.splice(listIndex, 1);
    this.setState({
      numbers: oldArray,
    });
  };
  render() {
    const listItems = this.state.numbers.map((number, index) => (
      <li key={index} onClick={this.removeHandler.bind(this, index)}>
        {number}
      </li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default MapMethod;
