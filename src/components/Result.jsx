import React from 'react';
import './Result.css';

const Result = ({ answers }) => {
    // Dummy function to map answers to a personality result
    const getResult = () => {
        if (answers.includes('Butterfly')) {
            return 'You are creative and imaginative!';
        } else if (answers.includes('Person')) {
            return 'You have a strong connection to people!';
        } else {
            return 'You are introspective and thoughtful.';
        }
    };

    return (
        <div className="result-container">
            <h2>Your Personality Result:</h2>
            <p>{getResult()}</p>
        </div>
    );
};

export default Result;
