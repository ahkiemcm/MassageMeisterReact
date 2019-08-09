import React, { Component } from "react";

class AboutYou extends Component {
  render() {
    return (
      <div className="anatomy">
        <p>
          The muscular system is made up of about 700 named muscles. They are
          attached to the bones of the skeletal system, and are responsible for
          the movement of the human body. Here we provide you with a diagram of
          the human muscular system to use as reference and to explain your
          personal aches and pains to your therapist.
        </p>

        <p>
          You can find more detailed information
          <a href="http://www.innerbody.com/image/musfov.html">here</a>.
        </p>

        <img src="../images/big-muscle-diagram.jpg" alt="muscle-diagram" />
      </div>
    );
  }
}

export default AboutYou;
