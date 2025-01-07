import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight, faInfinity, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact, faBootstrap, faMicrosoft, faPython, faDocker, faLinux, faHtml5, faCss, faAws } from '@fortawesome/free-brands-svg-icons';
import HeaderComponent from './components/HeaderComponent';
import squirrelImage from './assets/images/squirrel.jpg';

const projects = [

    {
        name: 'Infrastructure Scanner',
        description: 'A tool for scanning system infrastructure and generating reports. ' +
            'Using Java and Python, the application communicates with devices using SNMP to collect data that can be used to monitor its status and health.',
        idea: 'Developed during my internship for the purpose of being able to automate system scanning.',
        usefulness: 'Helps organizations monitor devices efficiently. Through Grafana, users can easily view the status of their devices.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'Python', icon: faPython },
            { name: 'Docker', icon: faDocker },
            { name: 'Azure, Azure DevOps', icon: faMicrosoft },
            { name: 'SQL', icon: faDatabase },
            { name: 'Linux', icon: faLinux },
            { name: 'SNMP', icon: faNetworkWired },
        ],
    },
    {
        name: 'Borrow Buddy',
        description: 'Borrow Buddy is a web application developed using the ASP .NET MVC framework. ' +
            'It allows users to borrow and lend items within their community, encouraging a more sustainable way of utilizing our belongings. ',
        idea: 'Inspired by the idea of having a platform for sharing resources within communities and reducing waste.',
        usefulness: 'By allowing users to create listings, borrow items, and chat with other users, ' +
            'Borrow Buddy simplifies the process of borrowing instead of buying, ' +
            'reducing waste and encouraging a more sustainable lifestyle.',
        technologies: [
            { name: '.NET', icon: faMicrosoft },
            { name: 'Bootstrap', icon: faBootstrap },
            { name: 'SignalR', icon: faMessage },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
        ],
        github: 'https://github.com/EllenHalv/.NET-mvc-webapp',
    },
    {
        name: 'Budget Tracker',
        description: 'Budget Tracker is a full-stack application designed to help users manage their personal finances.\n' +
            'The application allows users to create budget goals, track their expenses, and provides a clear overview of their budget status.\n' +
            'Built with Java and React, as well as OAuth2 integration for secure login and streamline authentication.',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and remaining budget. Acts as a central place for keeping track of spendings today and all spendings in the past',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'React', icon: faReact },
            { name: 'OAuth2', icon: faKey },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
        ],
        github: 'https://github.com/EllenHalv/budget-tracker',
    },
    {
        name: 'Inventory Application',
        description: 'A web application built for keeping track of inventory. ' +
            'The app is hosted on AWS, showcasing CI/CD implementation for streamlined updates and reliable deployment.',
        idea: 'This project was inspired by the need for better personal inventory tracking of hobby materials.',
        usefulness: 'By having a central place for tracking inventory, ' +
            'users can easily see what they have in stock and have the ability to update the inventory when their stock changes.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'React', icon: faReact },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
            { name: 'AWS', icon: faAws },
            { name: 'CI/CD', icon: faInfinity },
        ],
        github: 'https://github.com/EllenHalv/YarnCRUD-AWS-CICD',
    },
    {
        name: 'Recipe Generator',
        description: 'The Recipe Generator is a Python-based application designed to simplify meal planning. ' +
            'It integrates with Spoonaculars API to fetch recipes. ' +
            'The user can randomize a recipe, get multiple recipes based on ingredients or dietary restrictions.',
        idea: 'The idea stemmed from the challenge of deciding what to cook with limited ingredients or specific dietary needs. ' +
            'The Recipe Generator was created to inspire users with a variety of recipes tailored to their input.',
        usefulness: 'This application is particularly helpful for people looking for new meal ideas or inspiration, ' +
            'or those following specific diets, such as vegetarian or gluten-free.',
        technologies: [
            { name: 'Python', icon: faPython },
        ],
        github: 'https://github.com/EllenHalv/Recipe_Generator',
    },
    {
        name: 'Web Service with Spring Security',
        description: 'This project is a Java-based web service that utilizes Spring Security to implement a robust authentication system. ' +
            'The services API is secured by using JSON Web Tokens (JWT) for stateless authentication, ',
        idea: 'JWT is a popular standard for managing authentication and authorization, ' +
            'and this project was created with the purpose of gaining valuable insight into effective implementation within a Spring-based architecture.',
        usefulness: 'Allows logged in users to access and contribute to resources stored in the server.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'Spring Security', icon: faKey },
        ],
        github: 'https://github.com/EllenHalv/Web-Service-with-Spring-Security',
    }
];

// Pages

const Projects = () => (
    <section>
        <h2>Projects <FontAwesomeIcon icon={faProjectDiagram}/></h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <h3>{project.name}</h3>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Idea:</strong> {project.idea}</p>
                    <p><strong>Usefulness:</strong> {project.usefulness}</p>
                    <div className="technologies">
                        <strong>Technologies:</strong>
                        <ul>
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="technology-item">
                                    <FontAwesomeIcon icon={tech.icon}/> {/* Ikonen */}
                                    <span>{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Only display if project has a github link */}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                        See more on GitHub
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
);

const Contact = () => (
    <section>
        <h2>Contact <FontAwesomeIcon icon={faEnvelope}/></h2>
        <div>

            <p>Connect with me!</p>
            <p>E-mail: <a href="mailto:ellenhalvardsson@gmail.com">ellenhalvardsson@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">Ellen
                Halvardsson</a></p>
        </div>
    </section>
);

const About = () => (
    <section>
        <h2>About</h2>
        <div>
            <p>Hi, I'm Ellen Halvardsson, a software developer with a passion for cloud technologies and full-stack
                development.
                I thrive on creativity and problem-solving, combining technical skills with innovative thinking to build
                solutions that improve everyday life.
                Beyond coding, I enjoy crafting and exploring ways to express myself through design and technology,
                always seeking new inspiration and opportunities for growth.</p>
        </div>
        <br/>
        <div>
            {/*<p>Download my CV <FontAwesomeIcon icon={faArrowRight}/> <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download>Click here</a></p>*/}
            <p>Download my CV <FontAwesomeIcon icon={faArrowRight} />
                <a href="/cv.pdf" download="cv.pdf">Click here</a>
            </p>
        </div>
    </section>
);

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

// Main Component
function App() {
    return (
        <Router>
            <div className="bg-dark text-white" style={{minHeight: '100vh'}}>
                {/* Background image */}
                <div
                    className="background-section"
                    style={{
                        backgroundImage: `url(${squirrelImage})`,
                    }}
                >
                    <div className="background-content">
                        <h1>Welcome to My Portfolio</h1>
                    </div>
                </div>

                {/* Header positioned below */}
                <div className="header-section">
                    <HeaderComponent/>
                </div>

                {/* Main Content */}
                <main className="container mt-4">
                    <Routes>
                        <Route path="/projects" element={<Projects projects={projects}/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/my-portfolio" element={<Home/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;