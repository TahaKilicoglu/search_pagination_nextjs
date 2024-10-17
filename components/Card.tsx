import React from 'react';

// Card bileşeninin prop tiplerini tanımlıyoruz
interface CardProps {
  title: string; // title prop'u string tipinde olacak
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
