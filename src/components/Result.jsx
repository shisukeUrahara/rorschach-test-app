import React from 'react';
import './Result.css';

const Result = ({ answers }) => {
    const analyzeAnswers = () => {
        let result = '';


        if (answers.includes('Butterfly')) {
            result = 'You are creative and imaginative!';
        }
        if (answers.includes('Person')) {
            result = 'You value human connection and empathy!';
        }
        if (answers.includes('Cloud')) {
            result = 'You tend to daydream and have a strong imagination!';
        }
        if (answers.includes('Animal')) {
            result = 'You are instinctual and action-oriented.';
        }
        if (answers.includes('Face')) {
            result = 'You are introspective and analytical.';
        }
        if (answers.includes('Tree')) {
            result = 'You are grounded and value stability and growth.';
        }

        // If no specific answer pattern is found, give a general result
        if (!result) {
            result = 'You have a balanced personality with a mix of traits.';
        }

        return result;
    };

    return (
        <div className="result-container">
            <h2>Your Personality Result:</h2>
            <p>{analyzeAnswers()}</p>
        </div>
    );
};

export default Result;
