/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import EventForm, { EventFormPropsTypes } from './index';

export default {
  title: 'UI components/EventForm',
  component: EventForm,
} as Meta;

const Template: Story<EventFormPropsTypes> = (args) => <EventForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '9.9.2022',
  formTitle: 'Добавить событие',
  formButtonText: 'Добавить',
};
