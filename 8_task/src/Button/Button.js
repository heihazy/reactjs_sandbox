import React from "react";
import "./Button.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const Button = (props) => {
  return (
    <div>
      <button onClick={props.click}>
        <Link to="/blog/:postId">Read More</Link>
      </button>
    </div>
  );
};

export default Button;
