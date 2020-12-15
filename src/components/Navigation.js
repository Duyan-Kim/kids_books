import React from "react";
import SearchItem from "./SearchItem";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BookContainer from "./BookContainer";
import Slider from "./Slider";

const Navigation = () => {
  return (
    <>
      <div className="nav-search-div">
        <h3>책방이름</h3>
        <SearchItem />
        <p>아이콘자리</p>
      </div>
      <div className="nav-tabs-div">
        <Tabs defaultActiveKey="Bestsellers">
          <Tab eventKey="Home" title="Home">
            <Slider />
          </Tab>
          <Tab eventKey="Bestsellers" title="Bestsellers">
            <BookContainer name="유아 베스트셀러" pubDate="2020-12-09" />
            <BookContainer name="아동 베스트셀러" pubDate="2020-12-09" />
            <BookContainer name="원서 베스트셀러" pubDate="2020-12-09" />
          </Tab>
          <Tab eventKey="New" title="New">
            <BookContainer name="신간도서" pubDate="2020-12-09" />
          </Tab>
          <Tab eventKey="My books" title="My books"></Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Navigation;
