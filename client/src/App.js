import React from "react";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";

//Will use styled components for logo

function App() {
  return (
    <div className="App">
      <div className="x-dev" label="x-dev brand">
        <h2>
          Powered By
          <span id="x-spin" label="x-dev animation">
            -X-
          </span>
          <br />
          DEV
        </h2>
      </div>
      <Nav />
      <Homepage />
    </div>
  );
}

export default App;
