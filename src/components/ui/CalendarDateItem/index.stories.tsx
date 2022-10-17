/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { DateTime } from 'luxon';
import CalendarDateItem, { CalendarDateItemPropsTypes } from './index';

export default {
  title: 'UI components/CalendarDateItem',
  component: CalendarDateItem,
} as Meta;

const Template: Story<CalendarDateItemPropsTypes> = (args) => (
  <CalendarDateItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: DateTime.now(),
  events: [],
};
