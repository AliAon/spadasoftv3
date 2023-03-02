import "./App.css";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import MainComponent from "./pages/MainComponent";
import Header from "./common/Header";
import Test from "./pages/Test";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/maincomponent" element={<MainComponent />} />
      <Route path="/test" element={<Test/>} />
    </Routes>
  );
}

export default App;
