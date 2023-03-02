import "./App.css";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import MainComponent from "./pages/MainComponent";
import Header from "./common/Header";
import Test from "./pages/Test";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="//about-us" element={<AboutUs/>} />
      <Route path="/maincomponent" element={<MainComponent />} />
      <Route path="/test" element={<Test/>} />
    </Routes>
  );
}

export default App;
