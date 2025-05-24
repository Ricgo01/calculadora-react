import React from 'react';
import RepoButton from './index';
import '../../App.css';

export default {
  title: 'Calculator/RepoButton',
  component: RepoButton,
  parameters: {
    layout: 'centered',
  },
  
};


const Template = (args) => <RepoButton {...args} />;

export const Default = Template.bind({});
Default.storyName = 'GitHub Repository Button';
