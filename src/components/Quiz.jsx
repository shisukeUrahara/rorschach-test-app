import React, { useState } from 'react';
import './Quiz.css';
import inkblot1 from '../assets/inkblot1.png';
import inkblot2 from '../assets/inkblot2.png';
import { useNavigate } from 'react-router-dom';


const Quiz = ({ onQuizEnd }) => {
    const navigate = useNavigate();

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
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);

        // If the quiz is complete, send the answers and navigate to the result page
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Call onQuizEnd to pass answers to the parent component
            onQuizEnd(newAnswers);

            // Navigate to the result page
            navigate('/result');
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
