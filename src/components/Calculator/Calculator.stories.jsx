import React from 'react';
import Calculator from './index';
import { CalculatorProvider } from '../../CalculatorContext';
import '../../App.css';

export default {
  title: 'Calculator/Calculator',
  component: Calculator,
  decorators: [ 
  ],
  parameters: {
    layout: 'centered',
  },

};

const Template = () => <Calculator />;

export const DefaultView = Template.bind({});
DefaultView.storyName = 'Default Calculator';
DefaultView.decorators = [
  (Story) => (
    <CalculatorProvider>
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