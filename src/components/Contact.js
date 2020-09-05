import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contactSection">
            <div className="contactText">
                <h1 className="contactHeading">CONTACT</h1>
                <div className="contactDivider"></div>
                <p className="contactParagraph">Let's get in touch!</p>
                <div className="contactLinks">
                    <a href="#a" className="contactItem"><i className="fas fa-envelope"></i>bui.stvn@gmail.com</a>
                    <a href="https://github.com/buistvn" className="contactItem"><i className="fab fa-github"></i>Github</a>
                    <a href="#a" className="contactItem"><i className="fas fa-file-alt"></i>Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Contact