import { useState } from 'react';
import './styles.scss';
import CreateBook from './components/CreateBook';
import { bookObj } from './types.config';
import BookList from './components/BookList';

export const App = () => {
  const [books, setBooks] = useState<bookObj[]>([]);

  const createBook = (bookState: bookObj): void => {
    console.log(bookState);
    setBooks((prev) => [...prev, bookState]);
  };

  const editBook = (bookState: bookObj): void => {
    const currentBooks = [...books];
    const index = currentBooks.findIndex((book) => book.id === bookState.id);
    currentBooks[index] = bookState;
    setBooks(currentBooks);
  };

  return (
    <>
      <div className='heading'>
        <h1>Reading List</h1>
      </div>
      <div>
        <BookList books={books} editBook={editBook} />
        <CreateBook onCreate={createBook} />
      </div>
    </>
  );
};
