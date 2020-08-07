// Library imports
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import {useStyles} from './makeCSS'
import BlogItem from 'components/BlogItem/blogItem'
import {GET_BLOGS} from 'utils/queries'
import sampleBlogs from 'data/sampleBlogs.json'
import { useState, useContext } from 'react';
import DeleteBlog from "components/DeleteBlog/deleteBlog"
import { AppContext } from "context/appContext"


const BlogContainer = () => {

  const classes = useStyles();
  let { loading, error, data } = useQuery(GET_BLOGS);
  const [editingBlog, setEditingBlog] = useState(false)
  const [deleteBlog, setDeleteBlog] = useState(false)
  const [state, dispatch] = useContext(AppContext);

  const handleEdit = (title, user_id, content) => {
    setEditingBlog(true)
    dispatch({
      type: "ENABLE_EDIT_BLOG",
      payload: {
        title: title,
        user_id: user_id,
        content: content
      }
    });
  }

  const handleDelete = (id) => {
    setDeleteBlog(true)
    dispatch({
      type: "ENABLE_DELETE_BLOG",
      payload: {
        id: id
      }
    })
  }

  const getBlogs = () => {

    if (loading) return (
      <Loader
         type="BallTriangle"
         color="#11325B"
         className={classes.loader}
         timeout={3000} //3 secs
 
      />
    );

    if (error) {
      // TODO: Change this
      // displaying sample data in case of error
      return sampleBlogs.map(({ id, title, user_id, content }) => (
        <BlogItem 
        id={id} 
        handleEdit={handleEdit}
        handleDelete={handleDelete} 
        title={title} 
        content={content} 
        author={user_id}/>))
      
    }

    

    return data.blogs.map(({ title, user_id, content }) => (
      <BlogItem title={title} content={content} author={user_id}/>)
    );
    

  }

  return (
    <div data-testId="blog-container">
      <center className={classes.root}>
      {error ? "Displaying sample data, error fetching resource": null}
      </center>
      <Grid container spacing={3} className={classes.root}>
          {getBlogs()}
      </Grid>
      <DeleteBlog/>
      </div>
  );
}

export default BlogContainer