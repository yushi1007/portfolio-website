import React from 'react';
import About from './containers/About';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Blogs from './containers/Blogs';
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
            <Blogs />
        </div>
    </div>
  );
}

export default App;
