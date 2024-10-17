import React from 'react';

const Header = ({ searchTerm, onSearchChange, onSearch }) => {
  return (
    <header className="header">
      <h1 className="logo">Search and Pagination App</h1>
      <div className="search-wrapper">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Ara..." 
          value={searchTerm} 
          onChange={onSearchChange} 
        />
        <button className="search-button" onClick={onSearch}>
          🔍
        </button>
      </div>
    </header>
  );
};

export default Header;
