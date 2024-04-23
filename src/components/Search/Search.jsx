// export const searchContact = (data, foundContact) => { 
//     return data.filter(contact => contact.name?.toLowerCase().includes(foundContact.toLowerCase()) );

// };

export const searchContact = () => { 

giy
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
