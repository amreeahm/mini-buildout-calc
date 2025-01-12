import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            if (input.trim() === '') {
                // Output "Error" if no input is provided
                setOutput('Error');
            } else {
                try {
                    const result = eval(input.replace(/[^-()\d/*+.]/g, ''));
                    if (result === Infinity) {
                        setOutput('Infinity');
                    } else if (isNaN(result)) {
                        setOutput('NaN'); // Handle 0/0
                    } else {
                        setOutput(result);
                    }
                } catch (error) {
                    setOutput('Error'); // Handle invalid expressions
                }
            }
        } else if (value === 'C') {
            setInput('');
            setOutput('');
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        '7', '8', '9', '+',
        '4', '5', '6', '-',
        '1', '2', '3', '*',
        'C', '0', '=', '/'
    ];

    return (
        <div className="calculator">
            <input
                type="text"
                value={input}
                readOnly
                
            />
            <div className="output">{output}</div>
            <div className="button-container">
                {buttons.map((button, index) => (
                    <button key={index} className='button' onClick={() => handleButtonClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
