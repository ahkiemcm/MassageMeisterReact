import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Booking from "./components/Booking";

//Will use styled components for logo

function App() {
  return (
    <Router className="App">
      <div className="x-dev" label="x-dev brand">
        <h5>
          Powered By
          <span id="x-spin" label="x-dev animation">
            -X-
          </span>
          <br />
          DEV
        </h5>
      </div>

      <Nav />

      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Switch>
        <Route exact path="/booking" component={Booking} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
