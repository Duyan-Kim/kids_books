import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BookContainer from "./components/BookContainer";
import Slider from "./components/Slider";
import BookCover from "./img/cover4.jpg";
import SearchResult from "./components/SearchResult";
//import img1 from "./img/kid3_resize700.jpg";
//import MenuContainer from "./components/MenuContainer";
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="nav-tabs-div">
        <Tabs defaultActiveKey="Bestsellers">
          <Tab eventKey="Home" title="Home">
            <Slider />
            <SearchResult title="돼지책" author="앤서니" img={BookCover} />
          </Tab>
          <Tab eventKey="Bestsellers" title="Bestsellers">
            <BookContainer
              name="소설 베스트셀러"
              categoryId="101"
              pubDate="2020-12-09"
            />
            <BookContainer
              name="시/에세이 베스트셀러"
              categoryId="102"
              pubDate="2020-12-09"
            />
          </Tab>
          <Tab eventKey="New" title="New">
            <BookContainer name="신간도서" pubDate="2020-12-09" />
          </Tab>
          <Tab eventKey="My books" title="My books"></Tab>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default App;
