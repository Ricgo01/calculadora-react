import React from 'react';
import KeyPad from './index'; // Asegúrate que la ruta a tu componente KeyPad sea correcta
import { CalculatorProvider } from '../../CalculatorContext'; // Ajusta la ruta si es necesario
import '../../App.css'; // Importa los estilos globales

export default {
  title: 'Calculator/KeyPad',
  component: KeyPad,
  decorators: [
    (Story) => (
      <CalculatorProvider>
        {/* El KeyPad ya tiene su propio div con la clase KeyPad.
            Podemos añadir un contenedor exterior si queremos centrarlo
            o añadir un fondo específico para la historia. */}
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#D3D3D3', // Un color de fondo gris claro para la historia
            borderRadius: '10px', 
            display: 'inline-block', // Para que el div se ajuste al contenido del KeyPad
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Una sombra suave
          }}>
          <Story />
        </div>
      </CalculatorProvider>
    ),
  ],
  parameters: {
    layout: 'centered', // Centra el componente en el Canvas de Storybook
  },
  // KeyPad no recibe props directas que necesitemos controlar a través de argTypes,
  // ya que su contenido (NumberButton, OperationButton) está hardcodeado
  // y su funcionalidad proviene del CalculatorContext.
};

// Plantilla base para la historia
const Template = (args) => <KeyPad {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Default KeyPad Layout';
// No se necesitan args específicos para esta historia, ya que KeyPad no toma props.

// Si quisieras simular un estado específico del CalculatorContext para ver cómo afecta
// a los componentes dentro del KeyPad (principalmente el Display, que no está aquí),
// podrías hacerlo modificando el CalculatorProvider en el decorador de una historia específica
// o, idealmente, modificando CalculatorProvider para aceptar un estado inicial.