import React, { Component } from "react";
import Schedule from "./Schedule";

class Homepage extends Component {
  bookingPage() {
    console.log("Working button");
    //Will send user to booking page
  }

  render() {
    return (
      <div className="parallax">
        <div className="paralimb">
          <h1>Why leave your house to relax?</h1>
          <h2>I'll just bring it to you. That's what I do.</h2>

          <button id="book-meister" onClick={this.bookingPage}>
            Book Your Meister
          </button>
        </div>
        <br />

        <Schedule />

        <footer>Copyright &copy 2019</footer>
      </div>
    );
  }
}

export default Homepage;
