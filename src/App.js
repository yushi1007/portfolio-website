import React, { useState } from 'react';
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

  const [toggle, setToggled] = useState(false)
  const handleClick = () => {
    setToggled((toggle) => !toggle);
};

  return (
    <div className={toggle ? "App darkmode":"App"}>
        <div className="portfolio">
            <Home 
            toggle={toggle}
            />
            <Navbar 
            toggle={toggle}
            handleClick={handleClick}
            />
            <About 
            toggle={toggle}
            />
            <Skills 
            toggle={toggle}
            />
            <Projects 
            toggle={toggle}
            />
            <Blogs 
            toggle={toggle}
            />
            <Contact 
            toggle={toggle}
            />
            <Footer 
            toggle={toggle}
            />
        </div>
    </div>
  );
}

export default App;
