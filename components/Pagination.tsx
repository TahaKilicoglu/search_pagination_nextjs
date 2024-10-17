import React from 'react';

// Pagination bileşeninin prop tiplerini tanımlıyoruz
interface PaginationProps {
  currentPage: number;    // currentPage prop'u number tipinde olacak
  totalPages: number;     // totalPages prop'u number tipinde olacak
  onPageChange: (page: number) => void; // onPageChange prop'u bir fonksiyon
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
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
