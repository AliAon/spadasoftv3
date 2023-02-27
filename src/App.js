import "./App.css";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import MainComponent from "./pages/MainComponent";
import Header from "./common/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maincomponent" element={<MainComponent />} />
    </Routes>
  );
}

export default App;
