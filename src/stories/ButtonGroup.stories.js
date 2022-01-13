import React from 'react';
import  ButtonGroup  from '../component/button';
import * as ButtonStories from './Button.stories';

export default {

  title: 'ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Tertiary.args }
  ],
  label:"ButtonGroup",
  orientation: 'horizontal',
};