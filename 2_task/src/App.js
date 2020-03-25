import React from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Person name="Phuong" age="24" />
      <Person name="Kati" age="25" />
      <Person name="Karin" age="45" />
    </div>
  );
};

export default App;
