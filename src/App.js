import React from "react";
import Navigation from "./components/Navigation";
import BookContainer from "./components/BookContainer";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import MenuContainer from "./components/MenuContainer";
import img1 from "../img/kid3_resize700.jpg";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
      </HashRouter>
      <Slider src={img1} />
      <BookContainer />
      <MenuContainer />
      <Footer />
    </div>
  );
};

export default App;
