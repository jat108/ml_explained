import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
            width: '80%',
            padding: '12px',
            border: '2px solid #ccc', // Default border
            borderRadius: '5px',
            fontSize: '16px',
            backgroundColor: isFocused ? '#FFF2E0' : '#F6EBDD', // Change background
            boxShadow: isFocused
            ? '0 0 8px rgba(189, 168, 93, 0.7)' // Glow on focus
            : '0 2px 4px rgba(0, 0, 0, 0.1)',
            outline: 'none', // Remove default blue outline
            transition: 'background-color 0.1s ease, border-color 0.1s ease, box-shadow 0.1s ease',
            borderColor: isFocused ? 'rgba(0, 0, 0, 0.3)' : '#ccc', // Custom border color on focus
        }}
        />

    </div>
  );
};

export default SearchBar;
