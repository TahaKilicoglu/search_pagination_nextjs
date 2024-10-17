import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        className={`page-button ${currentPage === 1 ? 'disabled' : ''}`} 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      
      <span className="page-info">
        {currentPage} / {totalPages}
      </span>
      
      <button 
        className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`} 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
