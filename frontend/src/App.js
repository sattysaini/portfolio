import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mx-auto px-4 py-8 fade-in">
          <Routes>
            <Route path="/" element={
              <div className="main-container">
                <div id="home-section">
                  <Home />
                </div>
                <div id="experience-section">
                  <Experience />
                </div>
                <div id="contact-section">
                  <Contact />
                </div>
              </div>
            } />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;