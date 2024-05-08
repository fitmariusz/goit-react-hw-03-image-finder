// import { useEffect, useState } from 'react';
import './App.css'
// import { useEffect, useState } from "react";
// import { SearchBar } from './Search/SearchBar';
// import { FetchPhoto } from './FetchPhoto/FetchPhoto'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppStart } from '../components/ApiStart/AppStart'
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Modal } from 'react-bootstrap';

// import { useQuery } from 'react-query'
// import { getPhoto } from '../utils/api/getPhoto'


// const INITCONTACTS = {
//   // searchPhotos: [],
//   urlSearch:"https://pixabay.com/api/?",
//   keyApiPixabay :"42443231-e69777d4d2b71e5eeb75f7bd2",
//   searchText: "dog",
//   page: 1,
//   perPage: 12,
//   loader: false,
// }


const queryClient = new QueryClient();

// import { nanoid } from 'nanoid';
// import { SearchContact } from './Search/Search';
// import { createPortal } from 'react-dom';
// import { ModalContent } from './Modal/Modal';

export const App = () => {

  return (
    <>

      <QueryClientProvider client={queryClient}>
      <AppStart/>
     </QueryClientProvider>

      


      {/*
      


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
