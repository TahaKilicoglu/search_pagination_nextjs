"use client"; // İstemci bileşeni olarak kullanılacaksa bu satırı ekleyin

import React from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const Page = () => {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const itemsPerPage = 5;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="card-container">
        {currentItems.map((item) => (
          <Card key={item.id} title={item.title} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default Page;
