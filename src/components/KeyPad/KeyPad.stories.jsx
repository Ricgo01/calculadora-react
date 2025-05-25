import React from 'react';
import KeyPad from './index';
import { CalculatorProvider } from '../../CalculatorContext';
import '../../App.css';

export default {
  title: 'Calculator/KeyPad',
  component: KeyPad,
  decorators: [
    (Story) => (
      <CalculatorProvider>
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#D3D3D3',
            borderRadius: '10px', 
            display: 'inline-block',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
          <Story />
        </div>
      </CalculatorProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <KeyPad {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Default KeyPad Layout';
