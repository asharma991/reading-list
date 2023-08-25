import React, { useState } from 'react';
import { bookObj } from '../types.config';

type EditBookProps = {
  onEdit: (book: bookObj) => void;
  resetEditMode: () => void;
  initialBook: bookObj;
};

const EditBook = (props: EditBookProps) => {
  const { initialBook, onEdit, resetEditMode } = props;
  const [formData, setFormData] = useState<bookObj>(initialBook);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isTitle: boolean
  ): void => {
    if (isTitle) {
      setFormData({ ...formData, title: e.target.value });
    } else {
      setFormData({ ...formData, author: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onEdit(formData);
    resetEditMode();
  };

  return (
    <div className='edit-book-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          onChange={(e) => onChange(e, true)}
          value={formData.title}
        />
        <label htmlFor='author'>Author:</label>
        <input
          type='text'
          id='author'
          onChange={(e) => onChange(e, false)}
          value={formData.author}
        />
        <div className='button-container'>
          <button type='submit'>Done</button>
          <button onClick={resetEditMode}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
