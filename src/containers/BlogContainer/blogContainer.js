// Library imports
import React, {useState, useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import BlogItem from 'components/BlogItem/blogItem'
import DeleteBlog from "containers/DeleteBlog/deleteBlog"
import EditBlog from "containers/EditBlog/editBlog"
import sampleBlogs from 'data/sampleBlogs.json'
import {GET_BLOGS} from 'utils/queries'
import {AppContext} from "context/appContext"
import {useStyles} from './makeCSS'


const BlogContainer = () => {

  const classes = useStyles();
  
  const [editVisible, setEditVisible] = useState(false)
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [state, dispatch] = useContext(AppContext);

  const { loading: blogLoading, 
          error: blogError, 
          data: blogData} = useQuery(GET_BLOGS);
     
  useEffect(() => {
    if(state.refreshState.reload){
      window.location.reload(false)
    }
  }, [state.refreshState.reload])
          

  const handleEditOpen = (_id, user_id, title, content) => {
    dispatch({
      type: "ENABLE_EDIT_BLOG",
      payload: {
        _id: _id,
        user_id: user_id,
        title: title,
        content: content
      }
    })
    setEditVisible(true)
  }

  const handleDeleteOpen = (_id) => {
    
    dispatch({
      type: "ENABLE_DELETE_BLOG",
      payload: {
        _id: _id
      }
    })
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
      // TODO: Change this
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
          <DeleteBlog 
          active={deleteVisible}
          handleClose={handleDeleteClose}/>
          <EditBlog
          active={editVisible}
          handleClose={handleEditClose}/>
      </div>
  );
}

export default BlogContainer
