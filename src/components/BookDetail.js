import React from 'react';

function BookDetail({ book, onClose }) {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <div>
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.description}</p>
        <p>Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
        <p>Published Date: {book.volumeInfo.publishedDate}</p>
        {/* Add more details based on your needs */}
      </div>
      <div>
        <button className='bt'>
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
            Read Now
          </a>
        </button>
        <button className='bt'>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </button>
      </div>
    </div>
  );
}

export default BookDetail;


