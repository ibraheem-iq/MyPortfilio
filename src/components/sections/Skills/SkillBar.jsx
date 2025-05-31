// src/components/sections/Skills/SkillBar.jsx
import React from 'react';

const SkillBar = ({ skill }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;