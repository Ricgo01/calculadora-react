import React from 'react';
import PropTypes from 'prop-types';
import useCalculator from '../../hooks/useCalculator';
import '../../App.css';


const OperationButton = ({operation, symbol}) => {
    const {handleOperation} = useCalculator();
    return (
        <button
            className = "operation"
            onClick = {() => handleOperation(operation)}
            >{symbol}
        </button>
    )
}
OperationButton.propTypes = { 
    operation: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired
};
export default OperationButton;