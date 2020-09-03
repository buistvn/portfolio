import React from 'react';
import './App.css';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <nav className="navbar">
                <ul className="navlist">
                    <li className="navitem"><a href="#about">About</a></li>
                    <li className="navitem"><a href="#projects">Projects</a></li>
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
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default App;