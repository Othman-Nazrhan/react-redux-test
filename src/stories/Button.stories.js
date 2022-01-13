import Button  from "../component/button"
import { themes } from '@storybook/theming';
import { addParameters } from '@storybook/react';

addParameters({
  options: {
    theme: themes.dark
  }
});

export default {

    title: 'Button',
    Component: Button,
    argTypes: { handlClick: { action: "actionClick" } }
}

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Primary =  Template.bind ({})
Primary.args= {
  label :"Primary",
  backgroundColor:"#ff6",
}

export const Tertiary = Template.bind({})
Tertiary.args ={
  label:"Tertiary 📚📕📈🤓",
  backgroundColor:"#ff0",
}


  