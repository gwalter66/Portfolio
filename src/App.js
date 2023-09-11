import "./App.css";

import { Routes, Route } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Navbar1 from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
