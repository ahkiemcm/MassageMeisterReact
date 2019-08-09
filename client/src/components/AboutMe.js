import React, { Component } from "react";
import styled from "styled-components";
import photo from "../images/blusink.jpg";

const Parallax = styled.div`
  background: url($(photo));
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  /* background-size: 100%; */
  border: solid;
`;

const Parallimb = styled.div`
  text-align: center;
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Parallax>
          <div>
            <h2>Test Text</h2>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default AboutMe;
