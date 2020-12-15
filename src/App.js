import Navigation from "./components/Navigation";

import Footer from "./components/Footer";
//import img1 from "./img/kid3_resize700.jpg";
//import Slider from "./components/Slider";
//import MenuContainer from "./components/MenuContainer";
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <Navigation />

      <Footer />
    </div>
  );
};

export default App;
