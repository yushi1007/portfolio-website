import React, { useState, useEffect } from 'react';
import './styles/App.css';
import About from './containers/About';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Blogs from './containers/Blogs';
import Contact from './containers/Contact';
import Footer from './containers/Footer';
import Loader from './components/Loader';

const delay = 2;

function App() {

  const [toggle, setToggled] = useState(false)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setToggled((toggle) => !toggle);
};

  const handleNavbarClick = () => {
    setOpen((open) => !open)
  }

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading])

  return (
    <div className={toggle ? "App darkmode":"App"}>
      {!loading ? 
        <Loader />
        :
        <div className="portfolio">
            <Home 
              toggle={toggle}
            />
            <Navbar 
              toggle={toggle}
              handleClick={handleClick}
              handleNavbarClick={handleNavbarClick}
              open={open}
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
        }
    </div>
  );
}

export default App;
