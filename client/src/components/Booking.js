import React, { Component } from "react";

class Booking extends Component {
  render() {
    return (
      <div className="booking">
        <h1>BOOK A MASSAGE</h1>
        <form name="general-info">
          <tbody>
            <td>
              First Name:
              <input type="text" className="biggerText">
                First Name
              </input>
            </td>
            <td>
              Last Name:
              <input type="text" className="biggerText">
                Last Name
              </input>
            </td>
          </tbody>
        </form>
      </div>
    );
  }
}

export default Booking;
