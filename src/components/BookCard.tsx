import { useState } from 'react';
import { bookObj } from '../types.config';
import EditBook from './EditBook';

type BookCardProps = {
  book: bookObj;
  onEdit: (book: bookObj) => void;
};

const BookCard = (props: BookCardProps) => {
  const { book, onEdit } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const enableEdit = () => {
    setIsEdit(true);
  };

  const resetEditMode = () => {
    setIsEdit(false);
  };

  return (
    <div className='book-card-container'>
      <button className='edit-btn' onClick={enableEdit}>
        📝
      </button>
      {isEdit ? (
        <EditBook
          onEdit={onEdit}
          initialBook={book}
          resetEditMode={resetEditMode}
        />
      ) : (
        <>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
        </>
      )}
    </div>
  );
};

export default BookCard;
