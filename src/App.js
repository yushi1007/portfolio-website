import React from 'react';
import About from './containers/About';
import Home from './containers/Home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <div className="portfolio">
            <Home />
            {/* <About /> */}
        </div>
    </div>
  );
}

export default App;
