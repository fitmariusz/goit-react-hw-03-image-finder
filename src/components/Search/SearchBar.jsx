import { useState } from "react";

export const SearchBar = (perm) => { 
  const { UpdateSerchText } = perm;
  const [query, setQuery] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();
    UpdateSerchText(query);

    
  };

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  return <>
  <header className="searchbar">
  <form className="form">
    <button type="submit" className="button" onClick={onSubmit}>
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoFocus="on"      
      autoComplete="off"
      placeholder="Search images and photos"
      onChange={onChange}      
    />
  </form>
      </header>
  
  </>
};


      

