import React, {useContext} from 'react';

import BlogContainer from 'containers/BlogContainer/blogContainer'
import {AppContext} from "context/appContext"


const HomePage = () => {

  const [state] = useContext(AppContext);

  let searchParams = new URLSearchParams(window.location.search);
  const userSearchBy = searchParams.get("searchBy")
  const userListBy = searchParams.get("listBy")
  const userFilterBy = searchParams.get("filterBy")

  const queryValues = {
    userSearchBy,
    userListBy,
    userFilterBy
  }

  
  return (
      <div>
        <BlogContainer queryValues={queryValues}/>
      </div>
  );
}

export default HomePage


// text d8d8d8
// text 51ff0d
// light black 1f1f1f
// dark black 121212