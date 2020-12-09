import React from "react";
import BookItem from "./BookItem";

const BookContainer = (props) => {
  return (
    <div className="layout8 text-center">
      <h2 className="mt-5 pt-5">{props.name}</h2>
      <p className="mt-3 mb-5 pb-3">{props.pubDate}</p>
      <div className="container mb-5">
        <div className="row">
          <BookItem title="돼지책" author="앤서니" img={} />
          <BookItem title="돼지책" author="앤서니" img={} />
          <BookItem title="돼지책" author="앤서니" img={} />
          <BookItem title="돼지책" author="앤서니" img={} />
          <BookItem title="돼지책" author="앤서니" img={} />
          <BookItem title="돼지책" author="앤서니" img={} />
          <BookItem title="돼지책" author="앤서니" img={} />
          <BookItem title="돼지책" author="앤서니" img={} />
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
