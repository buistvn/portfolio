import React from 'react';
import Scrollspy from 'react-scrollspy';
import './App.css';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <div className="intro">
                <div className="introText">
                    <h1 className="introHeading">STEVEN BUI</h1>
                    <p className="introParagraph">Software Engineer</p>
                </div>
            </div>
            <Scrollspy className="navBar" items={ ['about', 'projects', 'contact'] } currentClassName="current">
                <a href="#about" className="navItem"><i className="fas fa-user"></i>About</a>
                <a href="#projects" className="navItem"><i className="fas fa-folder"></i>Projects</a>
                <a href="#contact" className="navItem"><i className="fas fa-envelope"></i>Contact</a>
            </Scrollspy>
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
                    <a href="#about">
                        <div className="arrow"></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;