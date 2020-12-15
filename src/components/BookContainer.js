import React from "react";
import BookItem from "./BookItem";
import Form from "react-bootstrap/Form";
import BookCover from "../img/cover4.jpg";

const BookContainer = (props) => {
  return (
    <div className="layout8 mt-3">
      <div className="bookcontainer-name-div">
        <h2>{props.name}</h2>
        <Form>
          <Form.Check type="switch" id="custom-switch" label="줄거리 보기" />
        </Form>
      </div>
      <div className="container mb-3">
        <div className="row">
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
