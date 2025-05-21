import { use } from 'chai'
import { useState } from 'react'

const useCalculator = () => {
  const [display, setDisplay] = useState('0')

  setDisplay = (value) => {
    if (value === '0') {
      setDisplay(value)
    } else if (display === '0') {
      setDisplay(value)
    } else {
      setDisplay(display + value)
    }
  };[display]
  
  const handleNumberInput = (number) => {
    console.log('Número presionado:', number)
  }
  
  const handleOperation = (operation) => {
    console.log('Operación:', operation)
  }
  
  return {
    display,
    handleNumberInput,
    handleOperation
  }
}

export default useCalculator