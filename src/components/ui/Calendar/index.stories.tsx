/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Calendar, { CalendarPropsTypes } from './index';
import { FAKE_DATA } from '../../../fake-data';

export default {
  title: 'UI components/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarPropsTypes> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  eventsData: FAKE_DATA,
  weekStartsWith: 'mon',
  weekDaysNameType: 'short',
  year: 2022,
  month: 10,
};
