import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import homepage from './index.html';
import aboutpage from './pages/about.html';
import betainfo from './pages/betainfo.html';
import features from './pages/features.html';
import pomodoro from './pages/pomodoro.html';

function App() {
    return (
        <div className="App">
            <nav>
                <Link to={homepage}>Home</Link>
                <Link to={pomodoro}>Pomodoro Lab</Link>
                <Link to={features}>Features</Link>
                <Link to={betainfo}>Apply for BETA</Link>
                <Link to={aboutpage}>About The Project</Link>
            </nav>
            <Routes>
                <Route path="/" element={homepage} />
                <Route path="/pomodorolab" element={pomodoro} />
                <Route path="/about" element={aboutpage} />
                <Route path="/contact" element={betainfo} />
                <Route path="/features" element={features} />
            </Routes>
        </div>
    );
}

export default App;