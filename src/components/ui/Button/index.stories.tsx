/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { ButtonPropsTypes } from './index';

export default {
  title: 'UI components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonPropsTypes> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Submit',
  disabled: false,
};
