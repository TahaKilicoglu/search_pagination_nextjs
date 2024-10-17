import React from 'react';

// Prop tiplerini tanımlıyoruz
interface HeaderProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, onSearch }) => {
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
