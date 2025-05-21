import { act, useState } from 'react'

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  
  const [actualNumber, setActualNumber] = useState(0)

  const [previousNumber, setPreviusNumber] = useState(0)

  const [operand, setOperand] = useState('')

  const [secondNumber, setSecondNumber] = useState(false)

  const handleNumberInput = (digit) => {

    if (secondNumber === false || display === 'ERROR') {
      setActualNumber(String(digit))
      setDisplay(String(digit))
    }
  }

  return {
    display,
    handleNumberInput
  }
}

export default useCalculator