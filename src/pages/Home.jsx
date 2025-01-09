import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight, faInfinity, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
    <section>
        <div className={"home-links"}>
            <a href="/projects">
                Explore my projects <FontAwesomeIcon icon={faArrowRight}/>
            </a>
            <a href="/about">
                Learn more <FontAwesomeIcon icon={faArrowRight}/>
            </a>
        </div>
    </section>
);

export default Home;