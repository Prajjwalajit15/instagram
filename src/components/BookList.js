import React, { useState } from 'react';
import BookItem from './BookItem';
import BookDetailsContainer from './BookDetailsContainer';

function BookList({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div className='items'>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onBookClick={handleBookClick} />
      ))}

      <BookDetailsContainer selectedBook={selectedBook} onClose={handleCloseBookDetail} />
    </div>
  );
}

export default BookList;


