"use client"; // İstemci bileşeni olarak kullanılacaksa bu satırı ekleyin

import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
