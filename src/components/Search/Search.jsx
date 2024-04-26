// export const searchContact = (data, foundContact) => {
//     return data.filter(contact => contact.name?.toLowerCase().includes(foundContact.toLowerCase()) );

import axios from "axios";
import { useState } from "react";
// import { axios } from 'axios';

// };
// https://pixabay.com/api/?key=42443231-e69777d4d2b71e5eeb75f7bd2&q=yellow+flowers&image_type=photo

const urlSearch="https://pixabay.com/api/?";
const keyApiPixabay="42443231-e69777d4d2b71e5eeb75f7bd2";
// const form = document.querySelector("#search-form");
// const gallery = document.querySelector(".gallery");
// const nextPageBtn = document.querySelector("#nextPage");
// const pInfo = document.querySelector('#pInfo');
// let lightbox;


const queryPar = new URLSearchParams({
  key: keyApiPixabay,
  q: "Home",
  image_type: 'photo',
  orientation: 'horizontal',
  page:1,
  per_page: 40,
});






export const SearchContact = () => { 
  const [queryText, setQueryText] = useState('');
  const [responseQuery, setResponseQuery] = useState('');

  const fetchSearch = async () =>{
  // queryPar.set("q",queryText.split(" ").join("+"));
    const res = await fetch(`${urlSearch}${queryPar}`);
    const response = await res.json();
    setResponseQuery(res);
  }
  const onChange = (e) => {
      setQueryText(e.target.value)
   };
  const onSubmit = (e) => { 
    console.log(queryText);
    if (queryText === "") {
      console.log("Pusto");
    // Notify.warning('Enter some text...');
    // gallery.innerHTML="";
    // nextPageBtn.classList.add("hidden");
    // form.elements.searchQuery.value="";
    // pInfo.classList.add("hidden");
  }else{
  queryPar.set("page", 1);
  fetchSearch({queryText})
    .then(res => console.log(res.data))//showValue(res.data))
    .catch(error => console.log(error));
  }



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
