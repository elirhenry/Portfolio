import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
import ProjectsPage from "./Components/Projects";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
