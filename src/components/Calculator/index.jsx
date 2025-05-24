import React from 'react';
import Display from '../Display';
import KeyPad from '../KeyPad';
import RepoButton from '../RepoButton';
import '../../App.css';

const Calculator = () => {
    return (
        <div className="calculator">
            <Display/>
            <KeyPad/>
            <RepoButton/>
        </div>
    )
}
export default Calculator;