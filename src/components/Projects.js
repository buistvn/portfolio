import React from 'react';
import './Projects.css';
import Portfolio from '../images/Portfolio.png';
import CLOUDVOTE from '../images/CLOUDVOTE.png';

function Projects() {
    return (
        <div className="projectsSection">
            <div className="projectsContent">
                <h1 className="projectsHeading">PROJECTS</h1>
                <div className="projectsDivider"></div>
                <div className="projectsContainer">
                    <div className="projectsTemplate">
                        <div className="projectsDisplay">
                            <img src={CLOUDVOTE} className="projectsImage" alt="CLOUDVOTE"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Discord Bot</h2>
                            <p className="projectsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Mauris augue neque gravida in fermentum et. Vel fringilla est ullamcorper eget nulla.</p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">HTML</div>
                            </div>
                            <div className="projectsLinks">
                                <a href="#a" className="projectsRepository"><i className="fab fa-github"></i>Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="projectsTemplate">
                        <div className="projectsDisplay">
                            <img src={Portfolio} className="projectsImage" alt="Portfolio"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Portfolio</h2>
                            <p className="projectsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Mauris augue neque gravida in fermentum et. Vel fringilla est ullamcorper eget nulla.</p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">HTML</div>
                                <div className="projectsSkill">CSS</div>
                                <div className="projectsSkill">JavaScript</div>
                                <div className="projectsSkill">React</div>
                            </div>
                            <div className="projectsLinks">
                                <a href="https://buistvn.github.io/portfolio/" className="projectsLiveDemo"><i className="fas fa-external-link-alt"></i>Live Demo</a>
                                <a href="https://github.com/buistvn/portfolio" className="projectsRepository"><i className="fab fa-github"></i>Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="projectsTemplate">
                        <div className="projectsDisplay">
                            <img src={CLOUDVOTE} className="projectsImage" alt="CLOUDVOTE"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">CLOUDVOTE</h2>
                            <p className="projectsDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Mauris augue neque gravida in fermentum et. Vel fringilla est ullamcorper eget nulla.</p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">HTML</div>
                                <div className="projectsSkill">CSS</div>
                                <div className="projectsSkill">JavaScript</div>
                                <div className="projectsSkill">React</div>
                                <div className="projectsSkill">MongoDB</div>
                            </div>
                            <div className="projectsLinks">
                                <a href="https://github.com/buistvn/G5-Login-and-Vote" className="projectsRepository"><i className="fab fa-github"></i>Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects