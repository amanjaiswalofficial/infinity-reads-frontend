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


const BlogContainer = () => {

  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_BLOGS);

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
      console.log(GET_BLOGS)
      console.log(error)
      return sampleBlogs.map(({ title, user_id, content }) => (
        <BlogItem title={title} content={content} author={user_id}/>))
      
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
      </div>
  );
}

export default BlogContainer