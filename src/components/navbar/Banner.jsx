import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faBootstrap, faMicrosoft, faPython, faDocker, faLinux, faHtml5, faCss, faAws, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import bannerImage from '../../assets/images/banner.png';
import './Banner.module.css';

const Banner = () => (
    <div
        className="background-section"
        style={{ backgroundImage: `url(${bannerImage})` }}
    >
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
    </div>
);

export default Banner;
