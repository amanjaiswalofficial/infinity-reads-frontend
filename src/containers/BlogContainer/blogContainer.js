// Library imports
import React, {useContext, useEffect, useState} from 'react';
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import SingleBlog from 'containers/SingleBlog/singleBlog'
import PaginationContainer from 'containers/PaginationContainer/pagContainer'
import sampleBlogs from 'data/sampleBlogs.json'
import {GET_BLOGS} from 'utils/queries'
import {REFRESH_STATE} from 'utils/constants'
import {AppContext} from "context/appContext"
import {useStyles} from './makeCSS'


const BlogContainer = ({queryParams}) => {

  let {userSearch, userList, userFilter, userPage} = queryParams

  const classes = useStyles();

  const [state, dispatch] = useContext(AppContext);
  const [totalRecords, setTotalRecords] = useState(100)

  const { loading: blogLoading, 
          error: blogError, 
          data: blogData,
          refetch: blogRefetch} = useQuery(GET_BLOGS, {
            variables: {
              search: userSearch,
              sort: userList,
              filter: userFilter,
              start: parseInt(userPage),
              limit: 10
            }
          });

  // If true, reload the page to update blogs content
  useEffect(() => {
    if(state.refreshState.reload){
      dispatch({
        type: REFRESH_STATE,
        payload: {
          reload: false
        }
      })
      blogRefetch()
    }
  }, [state.refreshState.reload, dispatch, blogRefetch])
          

  // run query to fetch Blogs
  const getBlogs = () => {

    if (blogLoading) return (
      <Loader
         type="BallTriangle"
         color="#11325B"
         className={classes.loader}
         timeout={3000} //3 secs
 
      />
    );

    if (blogError) {
      // displaying sample data in case of error
      return sampleBlogs.map((data) => (
            <SingleBlog data={data}/>
            )
          )
    }

    
    return blogData.blogs.data.map((singleBlog) => (
          <SingleBlog data={singleBlog}/>
    ))
  }

  return (
    <div 
    data-testId="blog-container" 
    className={classes.parent}>
      <div className={classes.blogContainer}>
        {getBlogs()}
      </div>
      {!blogLoading ? <PaginationContainer 
      count={totalRecords}
      currentPage={userPage}
      queryParams={queryParams}/> : null}
    </div>
  );
}

export default BlogContainer
