import React from 'react';
import Particles from 'react-particles-js';
import './Intro.css';

function Intro() {
    const particlesOptions = {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    speed: 4,
                    size_min: 0.3
                }
	        }
        }
    };

    return (
        <div className="introSection">
            <Particles className="introParticles" params={particlesOptions} />
            <div className="introContent">
                <h1 className="introHeading">STEVEN BUI</h1>
            </div>
        </div>
    );
}

export default Intro