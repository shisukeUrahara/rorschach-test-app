import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ onQuizEnd }) => {
    const questions = [
        // {
        //     image: '/assets/inkblot1.png',
        //     options: ['Butterfly', 'Face', 'Cloud'],
        // },
        // {
        //     image: '/assets/inkblot2.png',
        //     options: ['Animal', 'Person', 'Tree'],
        // },
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
