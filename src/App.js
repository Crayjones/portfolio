import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wip-container">
      <div className="content">
        <h1>Cameron Jones</h1>
        <div className="subtitle">🚀 Coming Soon</div>
        <div className="description">
          I'm currently building my portfolio website as a cybersecurity student. In the meantime, you can check out my code and development progress on GitHub.
        </div>
        <a 
          href="https://github.com/Crayjones/portfolio" 
          className="github-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default App;
