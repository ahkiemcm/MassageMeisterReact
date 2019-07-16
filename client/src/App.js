import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Booking from "./components/Booking";
import styled from "styled-components";
import logo from "./images/logo/x-logo copy.png";

const Dev = styled.div`
  float: right;
`;

const Body = styled.div`
  background-color: red;
`;

//Will use styled components for logo
const Logo = styled.div`
  margin-left: 450px;
  height: 200px;
  width: 200px;
  /* background-color: gray; */
  border: rgb(0, 0, 0, 0.4) solid 12px;
  background-image: url(${logo});
`;

function App() {
  return (
    <Body>
      <Dev className="x-dev" label="x-dev brand">
        <h5>
          Powered By
          <span id="x-spin" label="x-dev animation">
            -X-
          </span>
          <br />
          DEV
        </h5>
      </Dev>

      <Router className="App">
        <Link to="/">
          <h4>Home</h4>
        </Link>

        <Logo />
        <Nav />

        <Switch>
          <Route exact path="/booking" component={Booking} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </Body>
  );
}

export default App;
