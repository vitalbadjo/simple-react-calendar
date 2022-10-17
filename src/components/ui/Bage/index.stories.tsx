/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Badge, { BadgePropsTypes } from './index';

export default {
  title: 'UI components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgePropsTypes> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Some badge text',
};
