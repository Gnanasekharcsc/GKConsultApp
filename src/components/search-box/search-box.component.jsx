import React from 'react';
import './search-box.style.css';

 export const SearchBox = ({placeholder, searchField, handleChange}) =>{
return(<input
        className="search"
         type='search'
         placeholder={placeholder} 
         name={searchField}
         onChange ={handleChange}
/>
);
};
export default SearchBox;