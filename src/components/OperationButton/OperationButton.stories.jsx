import React from 'react';
import OperationButton from './index';
import { CalculatorProvider } from '../../CalculatorContext'; 
import '../../App.css';

export default {
  title: 'Calculator/OperationButton',
  component: OperationButton,
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
    operation: {
      control: { type: 'select' },
      options: ['clear', 'negative', 'divide', 'multiply', 'substract', 'add', 'equals'],
      description: 'La operación que realiza el botón',
    },
    symbol: {
      control: { type: 'text' },
      description: 'El símbolo que muestra el botón',
    },
  },
  parameters: {
    layout: 'centered', 
  }
};

const Template = (args) => <OperationButton {...args} />;

export const Add = Template.bind({});
Add.args = {
  operation: 'add',
  symbol: '+',
};

export const Subtract = Template.bind({});
Subtract.args = {
  operation: 'substract',
  symbol: '-',
};

export const Multiply = Template.bind({});
Multiply.args = {
  operation: 'multiply',
  symbol: '*',
};

export const Divide = Template.bind({});
Divide.args = {
  operation: 'divide',
  symbol: '/',
};

export const Equals = Template.bind({});
Equals.args = {
  operation: 'equals',
  symbol: '=',
};

export const Clear = Template.bind({});
Clear.args = {
  operation: 'clear',
  symbol: 'C',
};

export const Negative = Template.bind({});
Negative.args = {
  operation: 'negative',
  symbol: '+/-',
};

export const AllOperationButtons = () => (
  <>
    <OperationButton operation="clear" symbol="C"/>
    <OperationButton operation="negative" symbol="+/-"/>
    <OperationButton operation="divide" symbol="/"/>
    <OperationButton operation="multiply" symbol="*"/>
    <OperationButton operation="substract" symbol="-"/>
    <OperationButton operation="add" symbol="+"/>
    <OperationButton operation="equals" symbol="="/>
    {}
    <div style={{width: '60px', height: '60px'}}></div> 
  </>
);
AllOperationButtons.storyName = 'All Operation Buttons Showcase';