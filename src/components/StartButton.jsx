import React from 'react';
import './StartButton.css';

const StartButton = ({ onStart }) => {
    return (
        <div className="start-container">
            <button className="start-btn" onClick={onStart}>Start Test</button>
        </div>
    );
};

export default StartButton;
