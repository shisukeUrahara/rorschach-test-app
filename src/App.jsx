import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartButton from './components/StartButton';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  const [answers, setAnswers] = useState([]);

  const handleQuizEnd = (userAnswers) => {
    setAnswers(userAnswers);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartButton onStart={() => window.location.href = "/quiz"} />} />
        <Route path="/quiz" element={<Quiz onQuizEnd={handleQuizEnd} />} />
        <Route path="/result" element={<Result answers={answers} />} />
      </Routes>
    </Router>
  );
};

export default App;
