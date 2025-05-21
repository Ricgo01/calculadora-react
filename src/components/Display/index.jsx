import React from 'react';
import PropTypes from 'prop-types';
import useCalculator from '../../hooks/useCalculator';
import '../../App.css';

const Display = () => {
    const {display} = useCalculator();

    const baseClass = 'display-value';
    const errorClass = display === 'ERROR' ? 'error' : '';

    return (
        <div className = "display">
            <div className = {`${baseClass} ${errorClass}`}>{display}</div>
        </div>
    )
}
export default Display;