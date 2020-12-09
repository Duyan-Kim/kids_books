import React from "react";
import Navigation from "./components/Navigation";
import BookContainer from "./components/BookContainer";
import Footer from "./components/Footer";
import img1 from "../img/kid3_resize700.jpg";
import Slider from "./components/Slider";
import MenuContainer from "./components/MenuContainer";

import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
      </HashRouter>
      <Slider
        src={img1}
        text="읽고 쓰고 글자와 친해져요"
        link="베스트셀러 보러가기"
      />
      <BookContainer name="유아 베스트셀러" pubDate="2020-12-09" />
      <MenuContainer />
      <BookContainer name="신간도서" pubDate="2020-12-09" />
      <BookContainer name="아동 베스트셀러" pubDate="2020-12-09" />
      <BookContainer name="원서 베스트셀러" pubDate="2020-12-09" />
      <Footer />
    </div>
  );
};

export default App;
