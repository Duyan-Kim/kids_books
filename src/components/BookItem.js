import React from "react";
import PropTypes from "prop-types";
//import { NYT_KEY } from "../constant";
//import axios from "axios";

const BookItem = (props) => {
  return (
    <div className="col-lg-3 col-md-6 mt-4">
      <img src={props.img} alt={props.title}>
        <h5>{props.title}</h5>
        <p>{props.author}</p>
    </div>
  );
};

export default BookItem;

BookItem.PropTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
};
