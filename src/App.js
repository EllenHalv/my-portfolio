import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import HeaderComponent from './components/HeaderComponent';

const projects = [
  {
    name: 'Budget Tracker',
    description: 'Fullstack-project with Java och React. Using Oauth2 for authentication',
    github: 'https://github.com/EllenHalv/budget-tracker',
  },
  {
    name: 'Borrow Buddy',
    description: 'Webbapp med .NET MVC',
    github: 'https://github.com/EllenHalv/.NET-mvc-webapp',
  },
  {
    name: 'Inventory App',
    description: 'AWS hosted CI/CD Java/React app',
    github: 'https://github.com/EllenHalv/YarnCRUD-AWS-CICD',
  },
  {
    name: 'Recipe Generator',
    description: 'Python Third-party API integrated Recipe Generator',
    github: 'https://github.com/EllenHalv/Recipe_Generator',
  },
  {
    name: 'Web Service with Spring Security',
    description: 'Java Web Service with Spring Security. Using JWT for authentication',
    github: '    https://github.com/EllenHalv/Web-Service-with-Spring-Security',
  }
];

// Pages
const Home = () => <section><h2>Welcome to My Portfolio</h2></section>;

const Projects = () => (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                See more on GitHub
              </a>
            </li>
        ))}
      </ul>
    </section>
);

const Contact = () => (
    <section>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:ellenhalvardsson@gmail.com">ellenhalvardsson@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ellen-halv/" target="_blank" rel="noopener noreferrer">Ellen Halvardsson</a></p>
    </section>
);

const CV = () => (
    <section>
      <h2>My CV</h2>
        <p>Download my CV: <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download>Click here</a></p>
    </section>
);

// Main Component
function App() {
    return (
        <Router>
            <HeaderComponent />
            <main className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects projects={projects} />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;