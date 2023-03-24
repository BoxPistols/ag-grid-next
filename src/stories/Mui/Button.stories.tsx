import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Mui/MuiButton',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'success', 'warning', 'error'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '保存する',
  color: 'primary',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Button',
  color: 'error',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  color: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  color: 'primary',
};
