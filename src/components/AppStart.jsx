import {  useState } from "react";
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
     const [resultSearch, setResultSerch] = useState(INITCONTACTS)
// useEffect(() => {
//     console.log("useEffect")
    
    


//   },[resultSearch.searchText, resultSearch.page])
  
  
  const UpdateSerchText = (newText, maxImage) => {
    setResultSerch({
        ...resultSearch,
        searchText: newText.split(" ").join("+"),
        page: 1,
        maxPhoto: 0,
    })
    console.log(resultSearch.searchText)
  }

  const updatePage = () => {
     setResultSerch({
      ...resultSearch, page:resultSearch.page+1,
    })
  }

    return <>
        <SearchBar UpdateSerchText={UpdateSerchText} />
        {resultSearch.searchText !== '' ? <FetchPhoto resultSearch={resultSearch} updatePage={updatePage} /> : <p></p>}
        {/* {resultSearch.maxPhoto >= resultSearch.perPage ? <button onClick={updatePage}>More image</button> : <p></p>} */}

    </>

};