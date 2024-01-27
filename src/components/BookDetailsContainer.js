import React from 'react';
import BookDetail from './BookDetail';

function BookDetailsContainer({ selectedBook, onClose }) {
  return (
    <div className='item-details'>
      {selectedBook ? (
        <BookDetail book={selectedBook} onClose={onClose} />
      ) : (
        <p>No book selected</p>
      )}
    </div>
  );
}

export default BookDetailsContainer;
