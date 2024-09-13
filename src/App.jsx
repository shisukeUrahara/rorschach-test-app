import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartButton from './components/StartButton';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);

  const handleQuizEnd = (userAnswers) => {
    setAnswers(userAnswers);
  };

  // Toggle the theme state
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  // Apply theme to the body tag
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  return (
    <div>
      <Router>
        <header className="app-header">
          <h1>Rorschach Test</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkTheme ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <Routes>
          <Route path="/" element={<StartButton onStart={() => window.location.href = "/quiz"} />} />
          <Route path="/quiz" element={<Quiz onQuizEnd={handleQuizEnd} />} />
          <Route path="/result" element={<Result answers={answers} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
