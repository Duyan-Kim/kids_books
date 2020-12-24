import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getBestSeller, getNewBook } from "../api";

const BookContainer = (props) => {
  const [bookItemArray, setBookItemArray] = useState([]);
  useEffect(() => {
    const activeTab = document.getElementsByClassName("tab-pane");
    const getBookArray = activeTab[1].classList.contains("active")
      ? getBestSeller
      : activeTab[2].classList.contains("active")
      ? getNewBook
      : null;
    async function getData() {
      const res = await getBookArray(props.categoryId);
      setBookItemArray(res.data.item);
    }
    getData();
  }, []);

  return (
    <div className="layout6" id="book-container-layout">
      <div className="bookcontainer-name-div">
        <h2>{props.name}</h2>
        <Form>
          <Form.Check
            type="switch"
            id={props.name}
            label="줄거리 보기"
            onChange={() => {
              const layout6 = document.getElementById("book-container-layout");
              layout6.classList.toggle("layout6");
              layout6.classList.toggle("layout2");
            }}
          />
        </Form>
      </div>
      <Container>
        <Row>
          {bookItemArray.slice(0, 6).map((item) => {
            return (
              <BookItem
                key={item.itemId}
                title={item.title}
                author={item.author}
                img={item.coverLargeUrl}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BookContainer;
