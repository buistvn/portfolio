import React from 'react';
import './Projects.css';
import WebScraper from '../images/WebScraper.png'
import Lainavi from '../images/Lainavi.png';
import Portfolio from '../images/Portfolio.png';
import Cloudvote from '../images/Cloudvote.png';

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
                            <p className="projectsDescription">The web scraper is a tool that extracts relevant data from the most popular films of the week on IMDb.
                                The data is stored in a MySQL database and written to a .csv output file.
                                It can also be sorted by popularity ranking, title, release date, and average rating.
                            </p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">Python</div>
                                <div className="projectsSkill">MySQL</div>
                                <div className="projectsSkill">BeautifulSoup</div>
                            </div>
                            <div className="projectsLinks">
                                <a href="https://github.com/buistvn/web-scraper" className="projectsRepository"><i className="fab fa-github"></i>Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="projectsTemplate">
                        <div className="projectsDisplay">
                            <img src={Lainavi} className="projectsImage" alt="Lainavi"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Lainavi</h2>
                            <p className="projectsDescription">Lainavi is a multi-function Discord bot that was built for the purpose of simplifying tasks. 
                                It comes with custom commands for moderation, alerts, and gaming. 
                                Using the Riot Games API, the bot can access and display data about players' stats for League of Legends.
                            </p>
                            <div className="projectsSkills">
                                <div className="projectsSkill">JavaScript</div>
                                <div className="projectsSkill">discord.js</div>
                                <div className="projectsSkill">LeagueJS</div>
                            </div>
                            <div className="projectsLinks">
                                <a href="https://github.com/buistvn/lainavi" className="projectsRepository"><i className="fab fa-github"></i>Repository</a>
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
                                This personal portfolio is for providing information about myself and showcasing some of the projects that I've been working on.
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
                            <img src={Cloudvote} className="projectsImage" alt="Cloudvote"></img>
                        </div>
                        <div className="projectsText">
                            <h2 className="projectsName">Cloudvote</h2>
                            <p className="projectsDescription">Cloudvote is an interactive voting website that allows users to create proposals for issues that they care about.
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