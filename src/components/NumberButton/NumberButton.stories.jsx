import React from 'react';
import NumberButton from './index';
import { CalculatorProvider } from '../../CalculatorContext';
import '../../App.css';

export default {
  title: 'Calculator/NumberButton',
  component: NumberButton,
  decorators: [
    (Story) => (
      <CalculatorProvider>
        {}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 60px)',
            gap: '15px',
            padding: '10px', 
            backgroundColor: '#f0f0f0',
            borderRadius: '8px', 
            width: 'fit-content',
            border: '1px solid #ccc'
          }}>
          <Story />
        </div>
      </CalculatorProvider>
    ),
  ],
  argTypes: {
    value: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
      description: 'El valor que muestra y envía el botón',
    },
  },
  parameters: {
    
    layout: 'centered', 
  }
};

const Template = (args) => <NumberButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '7',
};
Default.storyName = 'Default (7)';

export const DigitZero = Template.bind({});
DigitZero.args = {
  value: '0',
};

export const DecimalPoint = Template.bind({});
DecimalPoint.args = {
  value: '.',
};

export const AllNumberButtons = () => (
  <>
    <NumberButton value="1" />
    <NumberButton value="2" />
    <NumberButton value="3" />
    <NumberButton value="4" />
    <NumberButton value="5" />
    <NumberButton value="6" />
    <NumberButton value="7" />
    <NumberButton value="8" />
    <NumberButton value="9" />
    <NumberButton value="0" />
    <NumberButton value="." />
    {}
    <div style={{width: '60px', height: '60px'}}></div> 
  </>
);
AllNumberButtons.storyName = 'All Number Buttons Showcase';