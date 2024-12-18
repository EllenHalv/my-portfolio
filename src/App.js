import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faProjectDiagram, faKey, faDatabase, faMessage, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact, faBootstrap, faMicrosoft, faPython, faDocker, faLinux, faHtml5, faCss } from '@fortawesome/free-brands-svg-icons';
import HeaderComponent from './components/HeaderComponent';
import squirrelImage from './assets/images/squirrel.jpg';

const projects = [
    {
        name: 'Budget Tracker',
        description: 'Budget Tracker is a full-stack application designed to help users manage their personal finances effectively. The application allows users to track their income and expenses, providing a clear overview of their financial status. Built with Java and React, it features a robust backend powered by Spring Boot and a user-friendly frontend developed with React.\n' +
            '\n' +
            'To ensure data security and streamline authentication, the application integrates OAuth2 for secure login, allowing users to sign in with their Google accounts. The application emphasizes simplicity and ease of use, making it suitable for anyone looking to take control of their financial habits.',
        idea: 'This project was inspired by the need for better personal finance tools. The inspiration for the project came from the need for an efficient, modern, and accessible tool to manage personal budgets, making it easier for individuals to understand and optimize their spending.',
        usefulness: 'Helps users track their expenses and income effectively.' +
            '* Add, view, and manage income and expense records.\n' +
            '* Real-time calculation of remaining budget and total expenses.\n' +
            '* Secure authentication with OAuth2.',
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
        name: 'Infrastructure Scanner',
        description: 'A tool for scanning infrastructure assets and generating compliance reports.',
        idea: 'Developed during my internship to automate asset reporting.',
        usefulness: 'Helps organizations monitor compliance efficiently.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'Python', icon: faPython },
            { name: 'Docker', icon: faDocker },
            { name: 'Azure, Azure DevOps', icon: faMicrosoft },
            { name: 'SQL', icon: faDatabase },
            { name: 'Linux', icon: faLinux },
        ],
        github: 'https://github.com/EllenHalv/infrastructure-scanner', // Endast om publik
    },
    {
        name: 'Borrow Buddy',
        description: 'Webbapp med .NET MVC',
        idea: 'Inspired by reducing waste and sharing resources within communities.',
        usefulness: 'Encourages sharing instead of buying new, fostering sustainability.',
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
        name: 'Inventory App',
        description: 'AWS hosted CI/CD Java/React app',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and income effectively.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'React', icon: faReact },
            { name: 'OAuth2', icon: faKey },
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS', icon: faCss },
        ],
        github: 'https://github.com/EllenHalv/YarnCRUD-AWS-CICD',
    },
    {
        name: 'Recipe Generator',
        description: 'Python Third-party API integrated Recipe Generator',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and income effectively.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'React', icon: faReact },
            { name: 'OAuth2', icon: faKey },
        ],
        github: 'https://github.com/EllenHalv/Recipe_Generator',
    },
    {
        name: 'Web Service with Spring Security',
        description: 'Java Web Service with Spring Security. Using JWT for authentication',
        idea: 'This project was inspired by the need for better personal finance tools.',
        usefulness: 'Helps users track their expenses and income effectively.',
        technologies: [
            { name: 'Java', icon: faJava },
            { name: 'React', icon: faReact },
            { name: 'OAuth2', icon: faKey },
        ],
        github: '    https://github.com/EllenHalv/Web-Service-with-Spring-Security',
    }
];

// Pages
const Projects = () => (
    <section>
        <h2>Projects <FontAwesomeIcon icon={faProjectDiagram}/></h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-card glass" key={index}>
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        See more on GitHub
                    </a>
                </div>
            ))}
        </div>
    </section>
);

const Contact = () => (
    <section>
        <h2>Contact <FontAwesomeIcon icon={faEnvelope}/></h2>
        <div className="glass">

            <p>Feel free to contact me!</p>
            <p>Email: <a href="mailto:ellenhalvardsson@gmail.com">ellenhalvardsson@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">Ellen
                Halvardsson</a></p>
        </div>
    </section>
);

const About = () => (
    <section>
        <h2>About</h2>
        <div className="glass">
            <p>Download my CV: <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download>Click here</a></p>
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