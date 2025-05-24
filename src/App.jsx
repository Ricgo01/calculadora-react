import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import './App.css'
import { CalculatorProvider } from './CalculatorContext'

function App() {
  return (
    <div className="calculator-container">
      <h1 className='tittle'>REACTIVE CALCULATOR</h1>
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  )
}

export default App
