import React from 'react';
import useCalculator from '../../hooks/useCalculator';
import '../../App.css';

const Display = () => {
    const {display} = useCalculator();

    const baseClass = 'display-value';
    const errorClass = display === 'ERROR' ? 'error' : '';

    return (
        <div className = "display">
            <div className = {`${baseClass} ${errorClass}`}
            data-testid="calculator-display">
                
                {display}
            
            </div>
        </div>
    )
}
export default Display;