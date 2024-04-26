import './App.css'
import { useState } from "react";
// import { nanoid } from 'nanoid';
import { SearchContact } from './Search/Search';
import { createPortal } from 'react-dom';
import { ModalContent } from './Modal/Modal';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
    
  return (
    <>
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
      


      <button onClick={() => setShowModal(true)}></button>
      


      {showModal && createPortal(
        <ModalContent  onClose={() => setShowModal(false)} />,
        document.body
      )}
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

