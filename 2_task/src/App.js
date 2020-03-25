import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Phuong', age: 24 },
      { name: 'Kati', age: 25 },
      { name: 'Karin', age: 45 }
    ]
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}


export default App;
