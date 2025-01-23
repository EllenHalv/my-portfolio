// import Banner from './components/navbar/Banner.jsx';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
    return (
        <Router>
            <div className="bg-darkgrey text-white" style={{ minHeight: '100vh' }}>
                {/*<Banner />*/}
                <Navbar />
                <main className="container mt-4">
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;