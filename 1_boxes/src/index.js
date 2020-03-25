import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props) {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

const app = (
  <div>
    <Person name="Maria" title="CEO" age="29" />
    <Person name="Kati" title="Developer" age="25" />
    <Person name="Karin" title="Designer" age="45" />
  </div>
)

ReactDOM.render(app, document.querySelector("#root"));