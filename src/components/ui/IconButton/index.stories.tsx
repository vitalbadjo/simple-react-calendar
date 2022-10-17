/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import IconButton, { IconButtonPropsTypes } from './index';

export default {
  title: 'UI components/IconButton',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonPropsTypes> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  icon: 'arrowLeft',
};
