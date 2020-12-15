import React from "react";
import PropTypes from "prop-types";
//import { NYT_KEY } from "../constant";
//import axios from "axios";

const BookItem = (props) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <a href={props.url}>
        <img src={props.img} alt={props.title} className="text-center" />
        <div></div>
        <h5>{props.title}</h5>
        <p>{props.author}</p>
      </a>
    </div>
  );
};

export default BookItem;

BookItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
