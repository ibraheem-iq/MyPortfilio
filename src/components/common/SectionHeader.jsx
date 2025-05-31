import React from 'react';

const SectionHeader = ({ title, subtitle, centerAlign = true }) => (
  <div className={`mb-16 ${centerAlign ? 'text-center' : ''}`}>
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h2>
    <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 ${centerAlign ? 'mx-auto' : ''}`}></div>
    {subtitle && (
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;