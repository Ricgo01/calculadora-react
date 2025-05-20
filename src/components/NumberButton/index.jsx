import React from 'react';
import PropTypes from 'prop-types';
import useCalculator from '../../hooks/useCalculator';
import '../../App.css';

const NumberButton = ({value}) => {
    const {handleNumberInput} = useCalculator();
    return (
        <button
            className = "number"
            onClick = {() => handleNumberInput(value)}
            >{value}
        </button>
    )
}
NumberButton.propTypes = { 
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired};

export default NumberButton;