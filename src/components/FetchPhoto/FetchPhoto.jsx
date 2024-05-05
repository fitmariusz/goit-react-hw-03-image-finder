// import './App.css'
import { useQuery } from 'react-query'
import { getPhoto } from '../utils/api/getPhoto'

export const FetchPhoto = ({ resultSearch }) => {

  console.log(resultSearch)
  
  // https://tanstack.com/query/v3/docs/framework/react/overview
  const { data: photos, isLoading, error } = useQuery({ queryKey: ['search-photo'], queryFn: getPhoto(resultSearch) });
// 
  // console.log(resultSearch);
  // if (error)
  // {
  //   console.log(error.message);
  // }
  // if (isLoading)
  // {
  //   console.log('Loading...');
  // }
  // if (!error && !isLoading)
  // {
  //   console.log(photos.hits);
  //   }
  
  return <>
    <p></p>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        <ul>
          {!isLoading && !error && photos.hits.map(({ webformatURL, id }) => <li key={id}><img src={webformatURL} alt=""/></li>)}
        </ul>
    </>
}

// return <>
//     <p></p>
//         {error && <p>Something went wrong: {error.message}</p>}
//         {isLoading && <p>Loading...</p>}
//         <ul>
//           {!isLoading && !error && photos.hits.map(({ webformatURL, id }) => <li key={id}><img src={webformatURL} alt=""/></li>)}
//         </ul>
//     </>