import React, { useState } from "react";

const MyComponent = () => {
  let [colors, setColors] = useState(["black", "blue"]);

  const appendWhite = () => {
    setColors(colors.filter((color) => color !== "blue"));
  };
  return <div onClick={appendWhite}>색상 목록: {colors.join(", ")}</div>;
};

export default MyComponent;
