import React from 'react';
import Display from '../Display';
import KeyPad from '../KeyPad';
import '../../App.css';

const Calculator = () => {
    return (
        <div className="calculator">
            <Display/>
            <KeyPad/>
        </div>
    )
}
export default Calculator;