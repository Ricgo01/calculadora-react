import React from 'react';
import Display from './index'; 
import { CalculatorProvider } from '../../CalculatorContext'; 
import '../../App.css';     

export default {
  title: 'Calculator/Display',
  component: Display,
  decorators: [

  ],
  argTypes: {
    displayValue: {
      control: 'text',
      description: 'Valor a mostrar en el Display',
      name: 'Texto del Display' 
    }
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = () => <Display />;

export const Default = Template.bind({});
Default.args = {
  displayValue: '0',
};
Default.storyName = 'Default (0)';
Default.decorators = [
  (Story, { args }) => (
    <CalculatorProvider initialDisplay={args.displayValue}>
      <div style={{ 
          width: '280px',
          backgroundColor: '#222222', 
          padding: '15px', 
          borderRadius: '10px', 
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' 
        }}>
        <Story />
      </div>
    </CalculatorProvider>
  ),
];

export const WithNumber = Template.bind({});
WithNumber.args = {
  displayValue: '12345.6789',
};
WithNumber.storyName = 'Number Value';
WithNumber.decorators = Default.decorators; 
export const MaxLength = Template.bind({});
MaxLength.args = {
  displayValue: '999999999',
};
MaxLength.storyName = 'Max Length Value';
MaxLength.decorators = Default.decorators;

export const ErrorState = Template.bind({});
ErrorState.args = {
  displayValue: 'ERROR',
};
ErrorState.storyName = 'Error Message';
ErrorState.decorators = Default.decorators;