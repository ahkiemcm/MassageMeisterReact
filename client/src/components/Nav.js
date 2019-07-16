import React, { Component } from "react";
import styled from "styled-components";

const Navi = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

class Nav extends Component {
  render() {
    return (
      <div>
        <Navi className="navbar">
          <li>About You</li>
          <li>Services</li>
          <li>About Us</li>
          <li>FAQ</li>
        </Navi>
      </div>
    );
  }
}

export default Nav;
