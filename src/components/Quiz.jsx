import React, { useState } from 'react';
import './Quiz.css';
import inkblot1 from '../assets/inkblot1.png';
import inkblot2 from '../assets/inkblot2.png';

const Quiz = ({ onQuizEnd }) => {
    const questions = [
        {
            image: inkblot1,
            options: ['Butterfly', 'Face', 'Cloud'],
        },
        {
            image: inkblot2,
            options: ['Animal', 'Person', 'Tree'],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            onQuizEnd(answers);
        }
    };

    return (
        <div className="quiz-container">
            <img src={questions[currentQuestion].image} alt="Inkblot" />
            <div className="options">
                {questions[currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
