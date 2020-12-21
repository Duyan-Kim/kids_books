import React from "react";
import MenuItem from "./MenuItem";
import img2 from "../img/newicon.svg";
import img3 from "../img/rankicon.svg";
import img4 from "../img/recommendicon.svg";

const MenuContainer = () => {
  return (
    <div className="container text-center">
      <div className="inner-container m-5">
        <div className="row no-gutters">
          <MenuItem src={img2} name="신간도서" desc="12월 둘째 주" />
          <MenuItem src={img3} name="아동 베스트셀러" desc="12월 둘째 주" />
          <MenuItem
            src={img4}
            name="원서 베스트셀러"
            desc="뉴욕타임즈 어린이 시리즈"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
