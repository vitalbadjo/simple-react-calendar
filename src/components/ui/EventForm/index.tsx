import React, { useState } from 'react';
import styles from './index.module.scss';
import TextInput from '../TextInput';
import Button from '../Button';

type EventFormData = {
  title: string;
  description: string;
};

interface EventFormPropsTypes {
  date: string;
  formTitle?: string;
  formButtonText?: string;
  onConfirm: (data: EventFormData) => void;
}
export type { EventFormPropsTypes };

const EventForm = ({
  date,
  onConfirm,
  formButtonText = 'Add',
  formTitle = 'Add event',
}: EventFormPropsTypes) => {
  const [{ title, titleError }, setTitle] = useState<{
    title: string;
    titleError: string;
  }>({ title: '', titleError: '' });
  const [{ description, descriptionError }, setDescription] = useState<{
    description: string;
    descriptionError: string;
  }>({ description: '', descriptionError: '' });
  const handleOnConfirm = () => {
    if (!title) {
      setTitle({ title, titleError: 'Required' });
    }
    if (!description) {
      setDescription({ description, descriptionError: 'Required' });
    }
    if (title && description) {
      onConfirm({ title, description });
    }
  };

  const handleOnChange = (value: string, field: 'title' | 'desc') => {
    switch (field) {
      case 'title': {
        setTitle({ title: value, titleError: value ? '' : titleError });
        break;
      }
      case 'desc': {
        setDescription({
          description: value,
          descriptionError: value ? '' : descriptionError,
        });
        break;
      }
      default:
        throw new Error('Internal error in component EventForm');
    }
  };

  return (
    <div className={styles.eventForm}>
      <h3 className={styles.title}>{formTitle}</h3>
      <TextInput value={date} disabled />
      <TextInput
        value={title}
        placeholder="Title"
        onChange={(e) => handleOnChange(e, 'title')}
        error={titleError}
      />
      <TextInput
        value={description}
        placeholder="Description"
        onChange={(e) => handleOnChange(e, 'desc')}
        error={descriptionError}
      />
      <Button buttonText={formButtonText} onClick={handleOnConfirm} />
    </div>
  );
};

export default EventForm;
