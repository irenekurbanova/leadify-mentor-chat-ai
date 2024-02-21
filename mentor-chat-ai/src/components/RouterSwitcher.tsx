import { Routes, Route } from "react-router-dom";
import About from "./About";
import Settings from "./Settings";
import Home from "./Home";

const RouterSwitcher = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default RouterSwitcher;
