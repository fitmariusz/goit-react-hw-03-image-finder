import { useEffect, useState } from "react";
import { SearchBar } from './Search/SearchBar';
import { Axios } from "axios";
// import { FetchPhoto } from './FetchPhoto/FetchPhoto'


// import { useQuery } from 'react-query'
// import { getPhoto } from '../utils/api/getPhoto'
// import { ImageGallery } from 'components/ImageGallery/ImageGallery'

const INITCONTACTS = {
  searchPhotos: [],
  urlSearch:"https://pixabay.com/api/?",
  keyApiPixabay :"42443231-e69777d4d2b71e5eeb75f7bd2",
  searchText: "dog",
  page: 1,
  perPage: 12,
  maxPhoto: 0,
  loader: false,
}

export const AppStart = () => { 
  const [resultSearch, setResultSerch] = useState(INITCONTACTS);
  const {searchText, page}=resultSearch
  // const [refreshSerch, setRefreshSerch] = useState(false);
// useEffect(() => {
//     console.log("useEffect")
    
    


//   },[resultSearch.searchText, resultSearch.page])
  
  
  const UpdateSerchText = (newText) => {
    setResultSerch({
        ...resultSearch,
        searchText: newText.split(" ").join("+"),
        page: 1,
        maxPhoto: 0,
    })
    console.log("Wynik wpisania szukanej wartości "+resultSearch.searchText)
  }


  useEffect(() => {
    const fetchPhotos = async () => {
      setResultSerch({
        ...resultSearch,
        loader:true,
      });
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${resultSearch.searchText}&page=${resultSearch.page}&key=${resultSearch.keyApiPixabay}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setResultSerch({
          ...resultSearch,
          searchPhotos: [ ...response.data.hits],
          totalHits: response.data.totalHits,
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
    console.log('zmiana tekstu wyszukiwania')

  }, [searchText, page]);
  
  const updatePage = () => {
     setResultSerch({
      ...resultSearch, page:resultSearch.page+1,
    })
  }

    return <>
      <SearchBar UpdateSerchText={UpdateSerchText} />
      {resultSearch.loader ? <p>loader...</p>:<p>gallery...</p>}
      {/* {refreshSerch && resultSearch.searchText!=='' ? <FetchPhoto resultSearch={resultSearch} updatePage={updatePage} changeRefresch={changeRefresch} /> : <p></p>} */}
        {/* {resultSearch.maxPhoto >= resultSearch.perPage ? <button onClick={updatePage}>More image</button> : <p></p>} */}
{/* {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
    {!isLoading && !error &&<ImageGallery images={photos.hits} />}
    {!isLoading && !error && photos.totalHits > resultSearch.perPage ? <button onClick={updatePage}>More image</button> : <p></p>} */}
    </>

};