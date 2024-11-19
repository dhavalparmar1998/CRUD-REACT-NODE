import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Link className="nav-link" to="/">
          HOME
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className="nav-link" to="/add">
          ADD
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className="nav-link" to="/search">
          Search
        </Link>
      </Nav.Item>
      
    </Nav>
  );
}
