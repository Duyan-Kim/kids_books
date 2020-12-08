import React from "react";
import PropTypes from "prop-types";

const SearchItem = () => {
  return (
    <form className="form-inline my-2 my-lg-0 search-form">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="책 검색"
        aria-label="Search"
      />
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
        검색
      </button>
    </form>
  );
};

SearchItem.PropTypes = {
  value: PropTypes.string,
};

export default SearchItem;
