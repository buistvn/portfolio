import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import './App.css';

import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeNavbar)

    return (
        <div id="app">
            <div className={navbar ? 'navbar active' : 'navbar'}>
                <Scrollspy className="navItems" items={ ['about', 'projects', 'contact'] } currentClassName="current">
                    <a href="#about" className="navItem">About</a>
                    <a href="#projects" className="navItem">Projects</a>
                    <a href="#contact" className="navItem">Contact</a>
                </Scrollspy>
            </div>
            <div className="header">
                <section id="intro">
                    <Intro />
                </section>
            </div>
            <div className="content">
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
            <div className="footer">
                <div className="footerSpace"></div>
                <div className="arrowContainer">
                    <a href="#app">
                        <div className="arrow"></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;