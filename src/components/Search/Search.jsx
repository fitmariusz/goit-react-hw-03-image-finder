// export const searchContact = (data, foundContact) => { 
//     return data.filter(contact => contact.name?.toLowerCase().includes(foundContact.toLowerCase()) );

// };
// https://pixabay.com/api/?key=42443231-e69777d4d2b71e5eeb75f7bd2&q=yellow+flowers&image_type=photo

export const SearchContact = () => { 
    return <>
    <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    </>
};
