import React from "react";
import BookItem from "./BookItem";
import Form from "react-bootstrap/Form";
import BookCover from "../img/cover4.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BookContainer = (props) => {
  return (
    <div className="layout6">
      <div className="bookcontainer-name-div">
        <h2>{props.name}</h2>
        <Form>
          <Form.Check type="switch" id={props.name} label="줄거리 보기" />
        </Form>
      </div>
      <Container>
        <Row>
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
          <BookItem title="돼지책" author="앤서니" img={BookCover} />
        </Row>
      </Container>
    </div>
  );
};

export default BookContainer;
