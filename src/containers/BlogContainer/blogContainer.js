// Library imports
import React, {useState, useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import BlogItem from 'components/BlogItem/blogItem'
import NewBlogDialog from 'containers/NewBlogDialog/newBlogDialog'
import DeleteBlog from "containers/DeleteBlog/deleteBlog"
import EditBlog from "containers/EditBlog/editBlog"
import sampleBlogs from 'data/sampleBlogs.json'
import {GET_BLOGS} from 'utils/queries'
import {REFRESH_STATE} from 'utils/constants'
import {AppContext} from "context/appContext"
import {useStyles} from './makeCSS'


const BlogContainer = () => {

  const classes = useStyles();
  
  const [state, dispatch] = useContext(AppContext);
  const [editVisible, setEditVisible] = useState(false)  
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [data, setData] = useState({})
  

  const { loading: blogLoading, 
          error: blogError, 
          data: blogData} = useQuery(GET_BLOGS);
  
  // If true, reload the page to update blogs content
  useEffect(() => {
    if(state.refreshState.reload){
      dispatch({
        type: REFRESH_STATE,
        payload: {
          reload: false
        }
      })
      window.location.reload(false)
    }
  }, [state.refreshState.reload, dispatch])
          

  const handleEditOpen = (_id, user_id, title, content) => {
    
    const blogData = {
      _id, user_id, title, content
    }

    setData(blogData)
    // enable editBlog component
    setEditVisible(true)
  }

  const handleDeleteOpen = (_id) => {
    
    const blogData = {
      _id: _id
    }

    setData(blogData)
    // enable deleteBlog component
    setDeleteVisible(true)
  }

  const handleDeleteClose = () => {
    setDeleteVisible(false)
  }

  const handleEditClose = () => {
    setEditVisible(false)
  }

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
            <BlogItem 
            handleEdit={handleEditOpen}
            handleDelete={handleDeleteOpen}
            data={data}/>
            )
          )
    }

    
    return blogData.blogs.data.map((singleBlog) => (
          <BlogItem 
            handleEdit={handleEditOpen}
            handleDelete={handleDeleteOpen}
            data={singleBlog}/>
    ))
  }

  return (
    <div data-testId="blog-container">
          <Grid container spacing={3} className={classes.root}>
            {getBlogs()}
          </Grid>
          <NewBlogDialog/>
          <DeleteBlog 
          data={data}
          active={deleteVisible}
          handleClose={handleDeleteClose}/>
          <EditBlog
          data={data}
          active={editVisible}
          handleClose={handleEditClose}/>
      </div>
  );
}

export default BlogContainer
