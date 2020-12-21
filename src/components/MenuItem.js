import React from "react";

const MenuItem = (props) => {
  return (
    <div className="col-lg-4">
      <div className="icon">
        <img src={props.src} alt="아이콘" />
      </div>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <a>보기</a>
    </div>
  );
};

export default MenuItem;
