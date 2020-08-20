// Library imports
import React, {useEffect, useState} from 'react';
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import SingleBlog from 'containers/SingleBlog/singleBlog'
import PaginationContainer from 'containers/PaginationContainer/pagContainer'
import sampleBlogs from 'data/sampleBlogs.json'
import { GET_BLOGS } from 'utils/queries'
import { BLOG_LIMIT } from 'utils/constants'
import {useStyles} from './makeCSS'


const BlogContainer = ({queryParams}) => {

  let {userSearch, userList, userFilter, userPage} = queryParams

  const classes = useStyles();

  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const { 
    loading: blogLoading, 
    error: blogError, 
    data: blogData
        } = useQuery(GET_BLOGS, {
            variables: {
              search: userSearch,
              sort: userList,
              filter: userFilter,
              start: (parseInt(userPage)-1)*10,
              limit: BLOG_LIMIT
            }
          });

  useEffect(() => {
    
    // on getting information about total pages
    // set currentPage value to userPage if userPage < totalPage
    // else set it to 1
    if(totalPages > 0)
    {  
      let userCurrentPage = 
        parseInt(userPage) && parseInt(userPage) <= totalPages ? 
        parseInt(userPage) : 
        1
      setCurrentPage(userCurrentPage)
    }

  }, [totalPages, currentPage, userPage])

  useEffect(() => {

    // when blogData received, also find out total pages
    // and convert it into equally divided pages
    // Ex - 17 = Math.ceil(17/10) = 2 pages
    if(blogData && totalPages === 0) {

      let totalRecords = blogData.blogs.data.total_count
      setTotalPages(Math.ceil(totalRecords/10))

    }

  }, [blogData, totalPages])
          

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

    if (blogData){
      
      return blogData.blogs.data.blogs.map((singleBlog) => (
          <SingleBlog data={singleBlog}/>
      ))
    }
    
  }

  return (
    <div 
    data-testId="blog-container" 
    className={classes.parent}>
      <div className={classes.blogContainer}>
        {getBlogs()}
      </div>
      {
        currentPage > 0 ? 
        <PaginationContainer 
        count={totalPages}
        currentPage={currentPage}
        queryParams={queryParams}/> : 
        null
      }
    </div>
  );
}

export default BlogContainer
