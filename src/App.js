import "./App.css";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import MainComponent from "./pages/MainComponent";
import Header from "./common/Header";
import Test from "./pages/Test";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/Team";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/our-team" element={<Team/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/maincomponent" element={<MainComponent />} />
      <Route path="/test" element={<Test/>} />
    </Routes>
  );
}

export default App;
