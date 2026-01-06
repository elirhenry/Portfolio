import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
import ProjectsPage from "./Components/Projects";
import AboutPage from "./Components/About";
import Navbar from "./Components/Navbar";
import "./Components/Layout.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
