import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';

import './Footer.module.css';

const Footer = () => {

    return (
    <div className="background-content">
        <div className="links">
            <a href="https://github.com/EllenHalv" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://www.youtube.com/@TheOnlyExceptionYT" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube}/></a>
        </div>
    </div>
    );
};

export default Footer;