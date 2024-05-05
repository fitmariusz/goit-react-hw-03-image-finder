// import { useEffect, useState } from 'react';
import './App.css'
import { useEffect, useState } from "react";
import { SearchBar } from './Search/SearchBar';
import { FetchPhoto } from './FetchPhoto/FetchPhoto'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from 'react-bootstrap';

// import { useQuery } from 'react-query'
// import { getPhoto } from '../utils/api/getPhoto'


const INITCONTACTS = {
  // searchPhotos: [],
  urlSearch:"https://pixabay.com/api/?",
  keyApiPixabay :"42443231-e69777d4d2b71e5eeb75f7bd2",
  searchText: "dog",
  page: 1,
  perPage: 12,
  loader: false,
}


const queryClient = new QueryClient();

// import { nanoid } from 'nanoid';
// import { SearchContact } from './Search/Search';
// import { createPortal } from 'react-dom';
// import { ModalContent } from './Modal/Modal';

export const App = () => {

  const [resultSearch, setResultSerch] = useState(INITCONTACTS)
    
  useEffect(() => {
    console.log("useEffect")


  },[resultSearch.searchText, resultSearch.page])
  
  
  const UpdateSerchText = newText => {
    setResultSerch({
      ...resultSearch, searchText:newText,
    })
    console.log(resultSearch.searchText)
  }

  const updatePage = () => {
     setResultSerch({
      ...resultSearch, page:resultSearch.page+1,
    })
  }
  



  

  return (
    <>
      
      <QueryClientProvider client={queryClient}>
        <SearchBar UpdateSerchText={UpdateSerchText} />
  
        <FetchPhoto resultSearch={resultSearch} />
        <button onClick={updatePage}>More image</button>
     </QueryClientProvider>

      


      {/* <header className="searchbar">
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
      


      <button onClick={() => setShowModal(true)}></button>
      


      {showModal && createPortal(
        <ModalContent  onClose={() => setShowModal(false)} />,
        document.body
      )} */}
      {/* <div className='divForm'>  */}
      {/* <Section title="Phonebook" children={<Form dataPhonebook={dataPhonebook} onSubmit={onSubmit} onChange={onChange}></Form>}></Section> */}
        {/* <Section title="Contacts" children={<ContactList dataPhonebook={dataPhonebook} onDelete={onDelete} onChange={onChange}></ContactList>}></Section> */}
      {/* </div> */}
      
{/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      {/* <MyVerticallyCenteredModl
        show={modalShow}
        onHide={() => setModalShow(false)}></MyVerticallyCenteredModl> */}



    </>
  );
};

