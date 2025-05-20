import { useState } from 'react'

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  
  // Funciones temporales que solo registran en consola
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