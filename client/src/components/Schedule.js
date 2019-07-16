import React, { Component } from "react";

class Schedule extends Component {
  render() {
    return (
      <div>
        <h1>Availability</h1>
        <table align="center" className="tableRules">
          <tr>
            <td className="tableData">
              <h2>Days</h2>
            </td>
            <td className="tableData">
              <h2>Hours</h2>
            </td>
          </tr>
          <tr>
            <td className="tableData">
              <h3>Mon - Friday</h3>
            </td>
            <td className="tableData">
              <h3>10am - 8pm</h3>
            </td>
          </tr>
          <tr>
            <td className="tableData">
              <h3>Saturday</h3>
            </td>
            <td className="tableData">
              <h3>12pm - 6pm</h3>
            </td>
          </tr>
          <tr>
            <td className="tableData">
              <h3>Sunday</h3>
            </td>
            <td className="tableData">
              <h3>12pm - 3pm</h3>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Schedule;
