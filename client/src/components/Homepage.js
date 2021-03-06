import React, { Component } from "react";
import Schedule from "./Schedule";
import styled from "styled-components";

const HomePage = styled.div`
  text-align: center;
`;

class Homepage extends Component {
  // bookingPage() {
  //   console.log("Working button");
  //   //Will send user to booking page
  // }

  render() {
    return (
      <HomePage>
        <div className="parallax">
          <div className="paralimb">
            <h1>Why leave your house to relax?</h1>
            <h2>I'll just bring it to you. That's what I do.</h2>
          </div>
        </div>
        <br />

        <Schedule />

        <footer>Copyright &copy 2019</footer>
      </HomePage>
    );
  }
}

export default Homepage;
