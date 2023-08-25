import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { bookObj } from '../types.config';

type CreateBookProps = {
  onCreate: (bookState: bookObj) => void;
};

const CreateBook = (props: CreateBookProps) => {
  const [formData, setFormData] = useState<bookObj>({
    title: '',
    author: '',
    id: '0',
  });
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
    props.onCreate({ ...formData, id: uuid() });
    setFormData({ title: '', author: '', id: '0' });
  };
  return (
    <div className='create-book'>
      <h3>Add a book</h3>
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
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default CreateBook;
