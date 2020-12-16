import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
//import { NYT_KEY } from "../constant";
//import axios from "axios";

const BookItem = ({ url, img, title, author }) => {
  return (
    <Col xs={12} md={4} lg={2}>
      <a href={url}>
        <img src={img} alt={title} />
        <div></div>
        <h5>{title}</h5>
        <p>{author}</p>
      </a>
    </Col>
  );
};

export default BookItem;

BookItem.propTypes = {
  url: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
