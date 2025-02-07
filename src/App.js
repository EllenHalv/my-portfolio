import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Projects from './pages/project/Projects';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import Footer from './components/footer/Footer';

function App() {
    return (
        <Router>
            <div className="bg-darkgrey text-white" style={{ minHeight: '100vh' }}>
                <Navbar />
                <main className="background">
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;