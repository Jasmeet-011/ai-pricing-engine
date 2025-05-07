import React from 'react';

const ThemeToggle = ({ onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 bg-accent text-white rounded-full focus:outline-none"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
