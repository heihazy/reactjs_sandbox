import React from "react";
import MainNav from "./Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      className="header"
    >
      <Navbar.Brand style={{ fontSize: "1.5rem" }}>
        Phuong Laitinen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <MainNav />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
