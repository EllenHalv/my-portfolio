import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight, faInfinity, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const About = () => (
    <section>
        <h2>About</h2>
        <br/>
        <div>
            <p>Hi, I'm Ellen Halvardsson, a software developer with a passion for cloud technologies and full-stack
                development.
                I thrive on creativity and problem-solving, combining technical skills with innovative thinking to build
                solutions that improve everyday life.
                Beyond coding, I enjoy crafting and exploring ways to express myself through design and technology. I
                enjoy knitting, crocheting and digital design,
                and I'm always seeking new inspiration and opportunities for growth.</p>
        </div>
        <br/><br/>
        <div>
            <p>Download my CV <FontAwesomeIcon icon={faArrowRight}/>
                {' '}
                <a href="/Ellen-Halvardsson-CV.pdf" download="Ellen-Halvardsson-CV.pdf">Click here</a>
            </p>
        </div>
        <br/><br/>
    </section>
);

export default About;