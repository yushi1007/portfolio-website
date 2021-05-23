import React from 'react';
import About from './containers/About';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Projects from './containers/Projects';
import Skills from './containers/Skills';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <div className="portfolio">
            <Home />
            <Navbar />
            <About />
            <Skills />
            <Projects />
        </div>
    </div>
  );
}

export default App;
