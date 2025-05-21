import react from 'react';
import PropTypes from 'prop-types';
import useCalculator from '../../hooks/useCalculator';
import '../../App.css';

const Display = () => {
    const {display} = useCalculator();
    return (
        <div className = "display">
            <div className = "display-value">{display}</div>
        </div>
    )
}