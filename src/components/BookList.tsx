import { bookObj } from '../types.config';
import BookCard from './BookCard';

type BookListProps = {
  books: bookObj[];
  editBook: (book: bookObj) => void;
};

const BookList = (props: BookListProps) => {
  const { books, editBook } = props;
  return (
    <div className='book-list-container'>
      {books.map((book: bookObj) => (
        <BookCard key={book.id} book={book} onEdit={editBook} />
      ))}
    </div>
  );
};

export default BookList;
