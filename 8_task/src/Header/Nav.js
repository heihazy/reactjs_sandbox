import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const MainNav = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link className="nav-link" to="/about-me">
            About Me
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link className="nav-link" to="/create-blog">
            Create Blog
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MainNav;
