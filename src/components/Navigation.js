import React from "react";
import SearchItem from "./SearchItem";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "rgba(25, 25, 25, 0.9)" }}
    >
      <Link to="/" className="navbar-brand ml-2">
        어린이책방
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              나의 책방<span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              href="localhost:3000"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              도서차트
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/" className="dropdown-item">
                유아 신간
              </Link>
              <Link to="/" className="dropdown-item">
                아동 베스트
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/" className="dropdown-item">
                원서 베스트
              </Link>
            </div>
          </li>
        </ul>
        <SearchItem />
      </div>
    </nav>
  );
};

export default Navigation;
