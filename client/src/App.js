import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import AboutYou from "./components/AboutYou";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
// import Booking from "./components/Booking";
import styled from "styled-components";
import logo from "./images/logo/x-logo.png";

const Dev = styled.div`
  float: right;
`;

const Body = styled.div`
  background-color: #3b3b3b;
`;

//Will use styled components for logo
const Logo = styled.img`
  margin-left: 380px;
  /* display: flex; */
  /* align-content: center; */
  height: 500px;
  width: 500px;
  /* background-color: gray; */
  border: rgb(0, 0, 0, 0.4) solid 12px;
  /* background-image: url(${logo}); */
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

        <Logo src={logo} alt="logo" />
        <Nav />

        <Switch>
          {/* <Route exact path="/booking" component={Booking} /> */}
          <Route path="/" component={Homepage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/aboutyou" component={AboutYou} />
          <Route path="/faq" component={FAQ} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
    </Body>
  );
}

export default App;
