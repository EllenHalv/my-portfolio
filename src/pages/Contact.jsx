import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Contact = () => (
    <section>
        <h2>Contact</h2>
        <div>
            <p><FontAwesomeIcon icon={faMessage}/> E-mail: <a href="mailto:ellenhalvardsson@gmail.com">ellenhalvardsson@gmail.com</a></p>
            <br/><br/>
            <h3>Social media</h3>
            <p><FontAwesomeIcon icon={faLinkedin}/> LinkedIn: <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">Ellen
                Halvardsson</a></p>
            <p><FontAwesomeIcon icon={faGithub}/> GitHub: <a href="https://github.com/EllenHalv" target="_blank" rel="noopener noreferrer">@EllenHalv</a></p>
            <p><FontAwesomeIcon icon={faYoutube}/>  YouTube:  <a href="https://www.youtube.com/@TheOnlyExceptionYT" target="_blank" rel="noopener noreferrer">@TheOnlyException</a></p>

        </div>
    </section>
);

export default Contact;