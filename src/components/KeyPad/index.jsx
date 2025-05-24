import React from 'react';
import NumberButton from '../NumberButton';
import OperationButton from '../OperationButton';
import '../../App.css'

const KeyPad = () => {
    return(
         <div className="KeyPad">
                <OperationButton operation="clear" symbol="C"/>
                <OperationButton operation="negative" symbol="+/-"/><OperationButton operation = "modulus" symbol="%"/>
                <div/>
                <NumberButton value={7}/><NumberButton value={8}/><NumberButton value={9}/><OperationButton operation="divide" symbol="/"/>
                <NumberButton value={4}/><NumberButton value={5}/><NumberButton value={6}/><OperationButton operation="multiply" symbol="*"/>
                <NumberButton value={1}/><NumberButton value={2}/><NumberButton value={3}/><OperationButton operation="substract" symbol="-"/>
                <NumberButton value={0}/><NumberButton value={'.'}/><OperationButton operation="equals" symbol="="/><OperationButton operation="add" symbol="+"/>
        </div>
    )
}
export default KeyPad;