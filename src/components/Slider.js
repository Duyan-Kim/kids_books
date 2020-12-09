import React from "react";

function Slider(props) {
  return (
    <div>
      <img src={props.src} alt="헤더 이미지" />
      <h5>{props.text}</h5>
      <p>
        <a href="#">{props.link}</a>
      </p>
    </div>
  );
}

export default Slider;
