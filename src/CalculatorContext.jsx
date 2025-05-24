import React from 'react';
import {useState} from 'react';


const CalculatorContext = React.createContext();

export const CalculatorProvider = ({children, initialDisplay = '0'}) => {

    const [display, setDisplay] = useState(initialDisplay);
    const [firstNumber, setFirstNumber] = useState(0);
    const [operation, setOperation] = useState(null);
    const [waitingSecond, setWaitingSecond] = useState(false);
    
    const isValidResult = (result) => {
        return result <= 999999999 && result >= 0;
    };
    const handleResult = (result) => {
        if (!isValidResult(result)) {
            setDisplay('ERROR');
            return false;
        }
        let resultString = String(result);
        if (resultString.length > 9) {
            resultString = resultString.substring(0, 9);
        }
        setDisplay(resultString);
        return true;
    };

    const operationResult = (first, second, operation) => {
            let result;

            switch(operation){
                case 'add':
                    result = first + second;
                    break;
                case 'module':
                    if (second === 0) {
                        setDisplay('ERROR');
                        return null;
                    }
                    result = first % second;
                    break;
                case 'substract':
                    result = first - second;
                    break;
                case 'multiply':
                    result = first * second;
                    break;
                case 'divide':
                    if (second === 0){
                        setDisplay('ERROR');
                        return null;
                    }
                    result = first / second;
                    break;
                default:
                    return null;
            }

            if(handleResult(result)){
                setFirstNumber(result);
                setWaitingSecond(true);
                return result;
            }

            return null;
    }

    const handleNumberInput = (number) => {
        if (waitingSecond === true){
            if (number === '.'){
                setDisplay('0.');
            }
            else {
                setDisplay(String(number))
            }
            setWaitingSecond(false);
        }
        else if (display === "0" || display === 'ERROR'){
            if (number === '.'){
                setDisplay('0.');
            }else {
                setDisplay(String(number));
            }
        }
        else if (display.length < 9){
            if (number === '.' && display.includes('.')){
                return;
            }
            setDisplay(display + String(number));
        }
        else if (display.length >= 10 && number === '.') {
            if (display.includes('.')) {
               return;
           }
        }
    }   

    const handleOperation = (op) => {
        if (op === 'clear'){
            setDisplay('0');
            setFirstNumber(0);
            setOperation(null);
            setWaitingSecond(false);
        }
        else if (op === 'equals'){
            if (operation){
                operationResult(firstNumber, parseFloat(display), operation);
                setOperation(null);
                setWaitingSecond(true);
            }
            else if (operation && waitingSecond){
                operationResult(firstNumber, firstNumber, operation);
                setOperation(null);
                setWaitingSecond(true);
            }
        }

        else if (op === 'negative'){
            if (display === '0' || display === 'ERROR') return;
            if (display.startsWith('-')){
                setDisplay(display.substring(1));
            } else {
                if (('-' + display).length > 9) {
                    return; 
                }
                setDisplay("-" + display);
            }
        }

        else {
            const current = parseFloat(display);
            if (waitingSecond === true && operation){
                setOperation(op);
            }else if (!waitingSecond && operation){
                const intermediateResult = operationResult(firstNumber, current, operation);
                if (intermediateResult !== null){
                    setOperation(op);
                } else {
                    setOperation(null);
                    setWaitingSecond(false);
                }
            } else {
                setFirstNumber(current);
                setOperation(op);
                setWaitingSecond(true);
            }
            
        }
    }

    return (
        <CalculatorContext.Provider value={{ 
            display, 
            handleNumberInput, 
            handleOperation 
        }}>
            {children}
        </CalculatorContext.Provider>
    );

}
export default CalculatorContext;