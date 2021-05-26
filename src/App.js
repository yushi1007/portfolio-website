import React from 'react';
import './styles/App.css';
import About from './containers/About';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Blogs from './containers/Blogs';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

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
            <Contact />
            <Footer />
        </div>
    </div>
  );
}

export default App;
