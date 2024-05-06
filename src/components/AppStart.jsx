import { useEffect, useState } from "react";
import { SearchBar } from './Search/SearchBar';
import { FetchPhoto } from './FetchPhoto/FetchPhoto'

const INITCONTACTS = {
  // searchPhotos: [],
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
  const [refreshSerch, setRefreshSerch] = useState(false);
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
  // useEffect(() => {
  //   console.log('zmiana refresh an false')
  //   setRefreshSerch(false);
  // }, [refreshSerch]);
  const changeRefresch = () => { 
    setRefreshSerch(true);
  };

  useEffect(() => {
    console.log('zmiana tekstu wyszukiwania')
    setRefreshSerch(false);
  }, [resultSearch.searchText, resultSearch.page]);
  
  const updatePage = () => {
     setResultSerch({
      ...resultSearch, page:resultSearch.page+1,
    })
  }

    return <>
        <SearchBar UpdateSerchText={UpdateSerchText} />
      {refreshSerch && resultSearch.searchText!=='' ? <FetchPhoto resultSearch={resultSearch} updatePage={updatePage} changeRefresch={changeRefresch} /> : <p></p>}
        {/* {resultSearch.maxPhoto >= resultSearch.perPage ? <button onClick={updatePage}>More image</button> : <p></p>} */}

    </>

};