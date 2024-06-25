import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Searchbar.css';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/q/${searchTerm}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className="searchbar-container">
        <div className="input-container">
          <input 
            id="searchInput" 
            type="text" 
            placeholder="Buscar..." 
            className='search-input'
            autoComplete='off'
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={handleKeyDown} 
          />
          <button onClick={handleSearch} className='search-button' type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-search search-icon" viewBox="0 0 16 16" >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
