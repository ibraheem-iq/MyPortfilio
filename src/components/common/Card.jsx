import React from 'react';

const Card = ({ children, className = "", hover = true }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${hover ? 'hover:shadow-xl transition-all duration-300' : ''} ${className}`}>
    {children}
  </div>
);

export default Card;