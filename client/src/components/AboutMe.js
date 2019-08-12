import React, { Component } from "react";
import styled from "styled-components";
import photo from "../images/headshot-of-x2.jpg";
import scenery from "../images/buddah-and-plant.jpg";

const Parallax = styled.div`
  background: url(${photo}) fixed no-repeat center;
  background-size: 80vw;
  display: flex;
  justify-content: center;
`;

const Parallax2 = styled.div`
  background: url(${scenery}) no-repeat center;
  background-size: 100vw;
  display: flex;
  justify-content: center;
  text-align: left;
`;

const Parallimb = styled.div`
  padding: 200px;
  color: #ffffff;
`;

const Backdrop = styled.div`
  background-color: grey;
  color: #000000;
  opacity: 0.8;
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Parallax>
          <Parallimb>
            <h2>
              I am a friendly, ambitious and intuitive individual that loves
              making peers feel relaxed and comfortable.
            </h2>
            <p>
              I always quest to make an impact by spreading peace and
              positivity, seeking more tangible methods with which to heal and
              elevate my environment, as I’ve done for years as a therapist.
            </p>
            <br />

            <br />
            <p>
              I seek to put others at ease by being reliable. I will not only
              bring my diligence to the table, but I will learn what I must to
              bring excellence as well.
            </p>
          </Parallimb>
        </Parallax>

        <Parallax2>
          <Parallimb>
            <Backdrop>
              <h1>Experience</h1>

              <ul>
                Mobile LMT-- Self-Employed - Atlanta, GA(Aug. 2018 - Current)
                <li>
                  Travels to client homes and establishments with all materials
                  necessary to perform spa-level treatment and relaxation within
                  a timely fashion.
                </li>
              </ul>

              <ul>
                Licensed Massage Therapist- Massage Heights- Atlanta, GA (Jun.
                2015-Jul. 2018)
                <li>Deliver quality massage to clients old and new.</li>
                <li>
                  Tend to in-house laundry, keeping all towels and linens in
                  workplace clean and prepared for new use.
                </li>
                <li>
                  Detail client information via "SOAP" notes for legal
                  documentation purposes.
                </li>
              </ul>
            </Backdrop>
          </Parallimb>
        </Parallax2>
      </div>
    );
  }
}

export default AboutMe;
