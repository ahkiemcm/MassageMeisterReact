import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navi = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  list-style: none;

  color: black;
  background-color: #df4535;
  border: solid #94843d;
  position: relative;
  padding: 10px 0 10px 0;
`;

class Nav extends Component {
  render() {
    return (
      <div>
        <Navi className="navbar">
          <Link to="/aboutyou">About You</Link>
          <Link to="/services">Services</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/faq">FAQ</Link>
        </Navi>
      </div>
    );
  }
}

export default Nav;
