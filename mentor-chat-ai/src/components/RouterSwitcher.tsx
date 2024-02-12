import { Routes, Route } from "react-router-dom";
import About from "./About";
import Discover from "./Discover";
import Home from "./Home";

const RouterSwitcher = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  );
};

export default RouterSwitcher;
