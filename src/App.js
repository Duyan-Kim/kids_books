import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BookContainer from "./components/BookContainer";
import Slider from "./components/Slider";
import BookCover from "./img/cover4.jpg";
import SearchResult from "./components/SearchResult";
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const tabContents = [
  {
    tab: "Home",
    content: (
      <>
        <SearchResult title="돼지책" author="앤서니" img={BookCover} />
        <Slider />
      </>
    ),
  },
  {
    tab: "BestSeller",
    content: (
      <>
        <BookContainer name="소설 베스트셀러" categoryId="101" />
        <BookContainer name="시/에세이 베스트셀러" categoryId="102" />
      </>
    ),
  },
  {
    tab: "New",
    content: (
      <>
        <BookContainer name="소설 신간" categoryId="101" />
        <BookContainer name="시/에세이 신간" categoryId="102" />
      </>
    ),
  },
];

const useTabs = (initialTab, allTabs) => {
  const [tabIndex, setTabIndex] = useState(initialTab);
  return {
    contentItem: allTabs[tabIndex],
    contentChange: setTabIndex,
  };
};

const App = () => {
  const { contentItem, contentChange } = useTabs(1, tabContents);

  return (
    <div className="container">
      <Navigation />
      <div className="nav-tabs-div">
        <Tabs>
          {tabContents.map((section, index) => (
            <Tab
              eventKey={tabContents[index].tab}
              title={tabContents[index].tab}
              onClick={() => contentChange(index)}
              key={index}
            >
              {tabContents[index].content}
            </Tab>
          ))}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default App;
