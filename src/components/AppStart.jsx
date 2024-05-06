import { useEffect, useState } from "react";
import { SearchBar } from './Search/SearchBar';
import axios from "axios";

// import { SearchContact } from './Search/Search';
import { createPortal } from 'react-dom';
import { ModalContent } from './Modal/Modal';

// import { FetchPhoto } from './FetchPhoto/FetchPhoto'


// import { useQuery } from 'react-query'
// import { getPhoto } from '../utils/api/getPhoto'
import { ImageGallery } from './ImageGallery/ImageGallery'
let test = [];
const INITCONTACTS = {
  // searchPhotos: [],
  urlSearch:"https://pixabay.com/api/?",
  keyApiPixabay :"42443231-e69777d4d2b71e5eeb75f7bd2",
  searchText: "",
  page: 1,
  perPage: 12,
  maxPage: 0,
  loader: false,
}

export const AppStart = () => { 
  const [resultSearch, setResultSerch] = useState(INITCONTACTS);
  const [searchPhotos, setSearchPhotos] = useState([])
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(0);
  const [showModal, setShowModal] = useState(false)

  // const {searchText, page}=resultSearch
  // const [refreshSerch, setRefreshSerch] = useState(false);
// useEffect(() => {
//     console.log("useEffect")
    
    


//   },[resultSearch.searchText, resultSearch.page])
  
  
  const UpdateSerchText = (newText) => {
    // setResultSerch({
    //     ...resultSearch,
    //     searchText: newText.split(" ").join("+"),
    //     page: 1,
    //     maxPhoto: 0,
    // })
    setPage(1);
    setSearchText(newText.split(" ").join("+"));
    setSearchPhotos([]);
  }


  useEffect(() => {
    const fetchPhotos = async () => {
      if (searchText === '') {
        return(1);
      }


      setResultSerch({
        ...resultSearch,
        loader: true,
      });

      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${searchText}&page=${page}&key=${resultSearch.keyApiPixabay}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setSearchPhotos((preValue) => [...preValue, ...response.data.hits]);
        setMaxPage(response.data.totalHits/12)
        setResultSerch({
          ...resultSearch,
   
        loader:true,
      });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setResultSerch({
        ...resultSearch,
        loader:false,
      });
    };
    fetchPhotos()
 
  }, [searchText, page]);
  
  const updatePage = () => {
     setPage(prev=>[
      prev+1,
    ])
  }

    return <>
      <SearchBar UpdateSerchText={UpdateSerchText} />
      {resultSearch.loader ? <p>loader...</p> : <ImageGallery images={searchPhotos} >Test</ImageGallery>}
      {!resultSearch.loader && (maxPage > page) ? <button onClick={updatePage}>More image</button> : <p></p>}
      {showModal && createPortal(
        <ModalContent imgSrc="https://pixabay.com/get/g54fce8f57769c43ff1c07dff2a27fc724fe9bcd320b3ce143feda3eeaf5dda3c767ddaceddc7cbd84f76e16d9b4b951ec92fe89dfef493efe0e68d0b42cf5f4b_640.jpg" onClose={() => setShowModal(false)} />,
        document.body
      )} 
      <button onClick={()=>setShowModal(true)}>
        Launch vertically centered modal
      </button>
{/* 
      <MyVerticallyCenteredModl
        show={modalShow}
        onHide={() => setModalShow(false)}></MyVerticallyCenteredModl> */}
    </>

};