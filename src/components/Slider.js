import React from "react";

function Slider(props) {
  return (
    <div>
      <img src={props.src} alt="헤더 이미지" />
      <h5>읽고 쓰고 글자와 친해져요</h5>
      <p>
        <a href="#">베스트셀러 보러가기</a>
      </p>
    </div>
  );
}

export default Slider;
