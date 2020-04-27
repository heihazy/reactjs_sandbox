import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about-me">
              About Me
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
