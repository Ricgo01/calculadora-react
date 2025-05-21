import { useState } from 'react'
import './App.css'
import NumberButton from './components/NumberButton'
import OperationButton from './components/OperationButton'  
import './App.css'

function App() {
  const handleButtonClick = (value) => {
    console.log('Button clicked:', value)
  }

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>

      <div className = "display">
            <div className = "display-value">{display}</div>
      </div>
      
      <div className="KeyPad">
        <OperationButton operation = "clear" symbol = "C"/>
        <OperationButton operation = "negative" symbol = "+/-"/>
        <p>peque</p>
        <p>calculator</p>
        <NumberButton value={7} />
        <NumberButton value={8} />
        <NumberButton value={9} />
        <OperationButton operation="divide" symbol="÷" />
        
        <NumberButton value={4} />
        <NumberButton value={5} />
        <NumberButton value={6} />
        <OperationButton operation="multiply" symbol="×" />
        
        <NumberButton value={1} />
        <NumberButton value={2} />
        <NumberButton value={3} />
        <OperationButton operation="subtract" symbol="-" />
        
        <NumberButton value={0} />
        <NumberButton value="." />
        <OperationButton operation="equals" symbol="=" />
        <OperationButton operation="add" symbol="+" />
      </div>
    </div>
  )
}

export default App
