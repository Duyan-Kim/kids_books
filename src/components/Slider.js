import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Slider(props) {
  return (
    <Jumbotron>
      <h3>메인 글귀</h3>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button>Learn more</Button>
      </p>
    </Jumbotron>
  );
}

export default Slider;
