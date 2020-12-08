import React from "react";
import MenuItem from "./MenuItem";

const MenuContainer = () => {
  return (
    <div className="container text-center">
      <div className="inner-container m-5">
        <div className="row no-gutters">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
