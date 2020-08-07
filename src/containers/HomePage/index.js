import React, {useContext, useEffect, useState } from 'react';
import BlogContainer from 'containers/BlogContainer/blogContainer'
import {AppContext} from 'context/appContext'
import NewBlogDialog from "containers/NewBlogDialog/newBlogDialog"


const HomePage = () => {

  const [state, dispatch] = useContext(AppContext);

  const resetNavBarProps = () => {
    dispatch({
      type: "RESET_NAVBAR_PROPS"
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
