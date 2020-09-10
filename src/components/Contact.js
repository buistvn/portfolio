import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contactSection">
            <div className="contactContent">
                <h1 className="contactHeading">CONTACT</h1>
                <div className="contactDivider"></div>
                <p className="contactParagraph">Let's get in touch!</p><br></br><br></br>
                <p className="contactLinks">
                    <a href="mailto:bui.stvn@gmail.com" className="contactItem"><i className="fas fa-envelope"></i>bui.stvn@gmail.com</a><br></br><br></br><br></br>
                    <a href="https://github.com/buistvn" className="contactItem"><i className="fab fa-github"></i>GitHub</a><br></br><br></br><br></br>
                    <a href="#a" className="contactItem"><i className="fas fa-file-alt"></i>Resume</a><br></br>
                </p>
            </div>
        </div>
    );
}

export default Contact