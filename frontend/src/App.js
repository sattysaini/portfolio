import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfessionalJourney from './pages/ProfessionalJourney';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto px-4 py-8 fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ProfessionalJourney />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;