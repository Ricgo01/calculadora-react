import React from 'react';
import Calculator from './index'; // Asegúrate que la ruta a tu componente Calculator sea correcta
import { CalculatorProvider } from '../../CalculatorContext'; // Ajusta la ruta si es necesario
import '../../App.css'; // Importa los estilos globales

export default {
  title: 'Calculator/Calculator',
  component: Calculator,
  decorators: [
    // El CalculatorProvider se aplicará a nivel de historia para controlar el estado inicial
  ],
  parameters: {
    layout: 'centered', // Centra el componente en el Canvas de Storybook
  },
  // No necesitamos argTypes a nivel de componente aquí,
  // pero podríamos tenerlos a nivel de historia si quisiéramos controlar el estado inicial.
};

// Plantilla base para la historia
const Template = () => <Calculator />;

export const DefaultView = Template.bind({});
DefaultView.storyName = 'Default Calculator';
DefaultView.decorators = [
  (Story) => (
    // Para la vista por defecto, usamos el CalculatorProvider sin un initialDisplay específico,
    // así que tomará el '0' por defecto del Provider.
    <CalculatorProvider>
      {/* El componente Calculator ya tiene su propio div con la clase .calculator
          que le da el fondo y el padding. No necesitamos envolverlo más aquí
          a menos que queramos un fondo para toda la "página" de la historia. */}
      <Story />
    </CalculatorProvider>
  ),
];

export const DisplayingNumber = Template.bind({});
DisplayingNumber.storyName = 'Displaying a Number';
DisplayingNumber.decorators = [
  (Story) => (
    <CalculatorProvider initialDisplay="12345.67">
      <Story />
    </CalculatorProvider>
  ),
];

export const DisplayingError = Template.bind({});
DisplayingError.storyName = 'Displaying Error State';
DisplayingError.decorators = [
  (Story) => (
    <CalculatorProvider initialDisplay="ERROR">
      <Story />
    </CalculatorProvider>
  ),
];

// Historia para probar interacciones (requiere @storybook/test)
// import { userEvent, within } from '@storybook/test';

// export const InitialCalculation = Template.bind({});
// InitialCalculation.storyName = 'Test: 1 + 2 = 3';
// InitialCalculation.decorators = DefaultView.decorators; // Usa el provider por defecto
// InitialCalculation.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   // Simular clics en los botones
//   await userEvent.click(canvas.getByRole('button', { name: '1' }));
//   await userEvent.click(canvas.getByRole('button', { name: '+' }));
//   await userEvent.click(canvas.getByRole('button', { name: '2' }));
//   await userEvent.click(canvas.getByRole('button', { name: '=' }));

//   // Verificar que el display muestra '3'
//   // Esto requeriría que el Display tenga un test ID o una forma de seleccionarlo
//   // y que el texto '3' esté visible.
//   // Ejemplo (necesitaría ajustar el selector):
//   // const displayElement = await canvas.findByText('3'); // O un selector más específico
//   // expect(displayElement).toBeInTheDocument();
// };