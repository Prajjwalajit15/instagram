import React from 'react';

// Inside BookItem.js
function BookItem({ book, onBookClick }) {
    return (
      <div onClick={() => onBookClick(book)}>
        {/* Display book information as per Figma design */}
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <h3>{book.volumeInfo.title}</h3>
        {/* Add other book details as needed */}
      </div>
    );
  } 
  

export default BookItem;

