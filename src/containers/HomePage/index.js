import React, {useContext, useEffect } from 'react';

import BlogContainer from 'containers/BlogContainer/blogContainer'
import NewBlogDialog from "containers/NewBlogDialog/newBlogDialog"
import {AppContext} from 'context/appContext'
import {RESET_NAVBAR_PROPS} from "utils/constants"

const HomePage = () => {

  const [state, dispatch] = useContext(AppContext);

  const resetNavBarProps = () => {
    dispatch({
      type: RESET_NAVBAR_PROPS
    });
  };

  useEffect(() => {
    resetNavBarProps() 
  }, [])

  return (
      <div>
        <NewBlogDialog/>
        <BlogContainer/>
      </div>
  );
}

export default HomePage
