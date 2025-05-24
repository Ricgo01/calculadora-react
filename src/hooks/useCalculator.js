import { useContext } from 'react';
import CalculatorContext from '../CalculatorContext';

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator debe usarse dentro de un CalculatorProvider');
  }
  return context;
};

export default useCalculator;