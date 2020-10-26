import React from 'react';
import './Projects.css';
import WebScraper from '../images/Web Scraper.png'
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
                            <img src={WebScraper} className="projectsImage" alt="WebScraper"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Web Scraper</h2>
                            <p className="projectsDescription">This tool takes the most popular films of the week from IMDb and extracts relevant data. 
                                The films are sorted by popularity ranking, title, release date, and average rating. 
                                The sorted information is written to a separate output file for accessible viewing.
                            </p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">Python</div>
                                <div className="projectsSkill">BeautifulSoup</div>
                            </div>
                            <div className="projectsLinks">
                                <a href="https://github.com/buistvn/web-scraper-tool" className="projectsRepository"><i className="fab fa-github"></i>Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="projectsTemplate">
                        <div className="projectsDisplay">
                            <img src={Lainavi} className="projectsImage" alt="Lainavi"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Lainavi</h2>
                            <p className="projectsDescription">Lainavi is a multi function Discord bot that was built for a friend's server.
                                It comes with features and commands for moderation, alerts, and gaming. 
                                Using the Riot Games API, the bot offers information about players' stats for League of Legends.
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
                                It also serves as a sandbox environment where I can try out new web development ideas.
                            </p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">HTML</div>
                                <div className="projectsSkill">CSS</div>
                                <div className="projectsSkill">JavaScript</div>
                                <div className="projectsSkill">React</div>
                            </div>
                            <div className="projectsLinks">
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
                            <p className="projectsDescription">CLOUDVOTE is an interactive voting website that allows users to create proposals for issues that they care about.
                                As a group project, we worked together to implement a secure login system and produce a clean and easy-to-use UI/UX design.
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