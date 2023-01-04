import "./contact.css";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import gmail from "../../img/gmail.png";

import React from "react";

const Contact = () => {
    return (
        <div className="container-contact" id="contactame">
            <h2># Contactame</h2>
            <ul>
                <li className="box-gmail box">
                    
                    <img src={gmail} alt="gmail-logo" className="gmail" />
                    <span className="link">
                        marco.developing@gmail.com
                    </span>
                </li>

                <li className="box-linkedin box">
                    <img src={linkedin} alt="linkedin-logo" className="linkedin" />
                    <a
                        href="https://www.linkedin.com/in/marco-antonio-bravo-castillo-187868212/"
                        className="link"
                    >
                        LinkedIn
                    </a>
                </li>

                <li className="box-github box">
                    <img src={github} alt="github-logo" className="github" />
                    <a href="https://github.com/Marcobc-exe" className="link">
                        Marcobc-exe
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
