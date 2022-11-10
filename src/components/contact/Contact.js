import "./contact.css";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import gmail from "../../img/gmail.png";

import React from "react";

const Contact = () => {
    return (
        <div className="container-contact">
            <h2># Contact me</h2>
            <ul>
              <li className="box-gmail">
                <img src={gmail} alt="" className="gmail" />
                <span>marco.developing@gmail.com</span>
              </li>

              <li className="box-linkedin">
                  <img src={linkedin} alt="" className="linkedin" />
                  <a href="https://www.linkedin.com/in/marco-antonio-bravo-castillo-187868212/">
                      LinkedIn
                  </a>
              </li>

              <li className="box-github">
                  <img src={github} alt="" className="github" />
                  <a href="https://github.com/Marcobc-exe">Marcobc-exe</a>
              </li>
            </ul>
        </div>
    );
};

export default Contact;
