import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
//import { NYT_KEY } from "../constant";
//import axios from "axios";

const BookItem = (props) => {
  return (
    <Col xs={12} md={4} lg={2}>
      <a href={props.url}>
        <img src={props.img} alt={props.title} />
        <div></div>
        <h5>{props.title}</h5>
        <p>{props.author}</p>
      </a>
    </Col>
  );
};

export default BookItem;

BookItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
