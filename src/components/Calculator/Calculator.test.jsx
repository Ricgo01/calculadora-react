import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import Calculator from './index';
import { CalculatorProvider } from '../../CalculatorContext';

// Helper para renderizar el componente Calculator con su Provider
const renderCalculator = () => {
  return render(
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

// Helper para obtener el valor del display
// Asume que el display es el único elemento que muestra números, "ERROR", o decimales.
// Puedes hacerlo más robusto añadiendo un data-testid al componente Display.
const getDisplayValue = () => {
  // Intenta encontrar el elemento por un patrón más general.
  // Esto es un poco frágil; un data-testid en el Display sería mejor.
  const displayElement = screen.getByTestId('calculator-display');
  return displayElement.textContent;
};


describe('Calculator Component - Vitest', () => {
  beforeEach(()=> {
    // No es estrictamente necesario renderizar aquí si cada test lo hace,
    // pero si muchos tests usan la misma configuración inicial, puedes hacerlo.
    // Por ahora, cada test renderizará su propia instancia para asegurar aislamiento.
  });

  it('Test: Chained Operations (e.g., 5 + 3 * 2 = 16)', async () => {
    renderCalculator();

    await fireEvent.click(screen.getByRole('button', { name: '5' }));
    await fireEvent.click(screen.getByRole('button', { name: '+' }));
    await fireEvent.click(screen.getByRole('button', { name: '3' }));
    // Al presionar la siguiente operación, se debe calcular 5+3=8
    await fireEvent.click(screen.getByRole('button', { name: '*' }));
    expect(getDisplayValue()).toBe('8');

    await fireEvent.click(screen.getByRole('button', { name: '2' }));
    await fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(getDisplayValue()).toBe('16');
  });

  it('Test: Error Handling (Div by Zero, Overflow, Negative Result)', async () => {
    renderCalculator();

    // División por cero
    await fireEvent.click(screen.getByRole('button', { name: '8' }));
    await fireEvent.click(screen.getByRole('button', { name: '/' }));
    await fireEvent.click(screen.getByRole('button', { name: '0' }));
    await fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(getDisplayValue()).toBe('ERROR');

    // Recuperación después de error
    await fireEvent.click(screen.getByRole('button', { name: 'C' }));
    expect(getDisplayValue()).toBe('0');
    await fireEvent.click(screen.getByRole('button', { name: '1' }));
    expect(getDisplayValue()).toBe('1');
    await fireEvent.click(screen.getByRole('button', { name: 'C' }));

    // Overflow por resultado > 999999999 (999999999 + 1)
    for (const digit of '999999999'.split('')) {
      await fireEvent.click(screen.getByRole('button', { name: digit }));
    }
    await fireEvent.click(screen.getByRole('button', { name: '+' }));
    await fireEvent.click(screen.getByRole('button', { name: '1' }));
    await fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(getDisplayValue()).toBe('ERROR');
    await fireEvent.click(screen.getByRole('button', { name: 'C' }));

    // Resultado negativo de operación (según tu isValidResult actual)
    await fireEvent.click(screen.getByRole('button', { name: '3' }));
    await fireEvent.click(screen.getByRole('button', { name: '-' }));
    await fireEvent.click(screen.getByRole('button', { name: '5' }));
    await fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(getDisplayValue()).toBe('ERROR');
  });

  it('Test: Decimal Point and 9 Character Input Limit', async () => {
    renderCalculator();
    
    await fireEvent.click(screen.getByRole('button', { name: '1' }));
    await fireEvent.click(screen.getByRole('button', { name: '.' }));
    await fireEvent.click(screen.getByRole('button', { name: '2' }));
    await fireEvent.click(screen.getByRole('button', { name: '3' }));
    await fireEvent.click(screen.getByRole('button', { name: '4' }));
    await fireEvent.click(screen.getByRole('button', { name: '5' }));
    await fireEvent.click(screen.getByRole('button', { name: '6' }));
    await fireEvent.click(screen.getByRole('button', { name: '7' }));
    await fireEvent.click(screen.getByRole('button', { name: '8' }));
    expect(getDisplayValue()).toBe('1.2345678');

    await fireEvent.click(screen.getByRole('button', { name: '9' })); // Intentar ingresar un décimo carácter
    expect(getDisplayValue()).toBe('1.2345678'); // No debe cambiar

    await fireEvent.click(screen.getByRole('button', { name: 'C' }));
    await fireEvent.click(screen.getByRole('button', { name: '.' }));
    await fireEvent.click(screen.getByRole('button', { name: '5' }));
    expect(getDisplayValue()).toBe('0.5');
  });

  it('Test: Division 22/7 (Result Truncation to 9 Chars)', async () => {
    renderCalculator();

    await fireEvent.click(screen.getByRole('button', { name: '2' }));
    await fireEvent.click(screen.getByRole('button', { name: '2' }));
    await fireEvent.click(screen.getByRole('button', { name: '/' }));
    await fireEvent.click(screen.getByRole('button', { name: '7' }));
    await fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(getDisplayValue()).toBe('3.1428571');
  });

  // Puedes añadir el test para '+/-' aquí también si lo deseas.
});