import React from "react";
import bookIcon from "../img/bookicon.svg";

const Footer = () => {
  return (
    <div className="footer container mt-3 bt-3">
      <div className="text-center">
        <div className="footer-logo">
          <img src={bookIcon} alt={bookIcon} />
        </div>
        <hr />
        <span>책방이름</span>
      </div>
      <div className="footer-contact">
        <p>INTERPARK KAKAO BOOK API</p>
      </div>
    </div>
  );
};

export default Footer;
