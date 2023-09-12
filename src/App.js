import "./App.css";

import { Routes, Route } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Navbar1 from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ReservationsProject from "./components/ReservationsProject/ReservationsProject";
import WeLoveMoviesPage from "./components/WeLoveMoviesPage/WeLoveMovies";
import FlashcardProjectPage from "./components/FlashcardProjectPage/FlashcardProjectPage";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/projects/reservations"
          element={<ReservationsProject />}
        />
        <Route path="/projects/WeLoveMovies" element={<WeLoveMoviesPage />} />
        <Route path="/projects/flashcards" element={<FlashcardProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
