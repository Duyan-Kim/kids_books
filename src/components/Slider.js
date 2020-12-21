import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Slider(props) {
  return (
    <Jumbotron>
      <p>- 프란츠 카프카 -</p>
      <h3>“책은 우리 내면에 얼려있는 바다를 내려치는 도끼 같아야 한다”</h3>
      <p>
        <Button>나의 책방 만들기</Button>
      </p>
    </Jumbotron>
  );
}

export default Slider;
