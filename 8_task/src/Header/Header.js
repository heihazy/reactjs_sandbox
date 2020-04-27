import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Phuong Laitinen</h1>
      <Nav />
    </div>
  );
};

export default Header;
