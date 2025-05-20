import react from 'react';
import NumberButton from '../NumberButton';
import OperationButton from '../OperationButton';
import '../../App.css'

const KeyPad = () => {
    return(
         <div className = "KeyPad">
                <NumberButton value = {7}/>
                <NumberButton value = {8}/>
                <NumberButton value = {9}/>
                <OperationButton operation = "divide" symbol = "/"/>
                <NumberButton value = {4}/>
                <NumberButton value = {5}/>
                <NumberButton value = {6}/>
                <OperationButton operation = "multiply" symbol = "*"/>
                <NumberButton value = {1}/>
                <NumberButton value = {2}/>
                <NumberButton value = {3}/>
                <OperationButton operation = "subtract" symbol = "-"/>
                <NumberButton value = {0}/>
                <NumberButton value = {'.'}/>
                <OperationButton operation = "add" symbol = "+"/>
                <OperationButton operation = "equals" symbol = "="/>

        </div>
    )
}

export default KeyPad;