import React from 'react';
import './Projects.css';
import Lainavi from '../images/Lainavi.png';
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
                            <img src={Lainavi} className="projectsImage" alt="Lainavi"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Lainavi</h2>
                            <p className="projectsDescription">Lainavi is a multi function Discord bot that was built for my personal server.
                                This fun bot comes with features and commands for moderation, alerts, and gaming. 
                                Using the Riot Games API, the bot offers information about players' stats and match histories for League of Legends.
                            </p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">JavaScript</div>
                                <div className="projectsSkill">discord.js</div>
                                <div className="projectsSkill">LeagueJS</div>
                            </div>
                            <div className="projectsLinks">
                                <a href="https://github.com/buistvn/lainavi-bot" className="projectsRepository"><i className="fab fa-github"></i>Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="projectsTemplate">
                        <div className="projectsDisplay">
                            <img src={Portfolio} className="projectsImage" alt="Portfolio"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Portfolio</h2>
                            <p className="projectsDescription">You're here!
                                Hosted with GitHub Pages, this website was designed for showcasing some of the projects that I've been working on.
                                It also serves as a sandbox environment where I can try out and practice new web development techniques.
                            </p>
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
                            <p className="projectsDescription">CLOUDVOTE initially started out as an idea for a group project.
                                As a team of three, we set out to create an interactive voting website that allows users to create proposals for issues that they care about. 
                            </p>
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