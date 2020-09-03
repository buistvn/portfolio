import React from 'react';
import './App.css';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <nav className="navbar">
                <ul className="navlist">
                    <li className="navitem"><a href="#about">About</a></li>
                    <li className="navitem"><a href="#portfolio">Portfolio</a></li>
                    <li className="navitem"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div id="home">
                <div className="intro">
                    <h1 className="name">STEVEN BUI</h1>
                    <p>Software Engineer</p>
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default App;