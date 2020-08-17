// Library imports
import React, {useState, useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/client';
import { useHistory} from 'react-router'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import SearchSortBar from "containers/SearchSortBar/searchSortBar"
import BlogItem from 'components/BlogItem/blogItem'
import FilterBox from 'containers/FilterBox/filterBox'
import NewBlogDialog from 'containers/NewBlogDialog/newBlogDialog'
import DeleteBlog from "containers/DeleteBlog/deleteBlog"
import EditBlog from "containers/EditBlog/editBlog"
import sampleBlogs from 'data/sampleBlogs.json'
import {GET_BLOGS} from 'utils/queries'
import {REFRESH_STATE, HOME_PATH} from 'utils/constants'
import {AppContext} from "context/appContext"
import {useStyles} from './makeCSS'


const BlogContainer = ({queryValues}) => {

  let {userSearchBy, 
       userListBy, 
       userFilterBy} = queryValues

  // convert a,b,c to ["a", "b", "c"]
  userFilterBy = userFilterBy ? userFilterBy.split(",") : []

  const classes = useStyles();
  const history = useHistory()

  const [state, dispatch] = useContext(AppContext);

  const [editVisible, setEditVisible] = useState(false)  
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [data, setData] = useState({})

  const [searchBy, setSearchBy] = useState(userSearchBy)
  const [listBy, setListBy] = useState(userListBy)
  const [filterBy, setFilterBy] = useState(userFilterBy)

  const { loading: blogLoading, 
          error: blogError, 
          data: blogData,
          refetch: blogRefetch} = useQuery(GET_BLOGS, {
            variables: {
              searchBy,
              listBy
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
          

  const handleEditOpen = (id, user_id, title, content) => {
    
    const blogData = {
      id, user_id, title, content
    }
    setData(blogData)
    // enable editBlog component
    setEditVisible(true)
  }

  const handleEditClose = () => {
    setEditVisible(false)
  }

  const handleDeleteOpen = (id) => {
    
    const blogData = {
      id: id
    }

    setData(blogData)
    // enable deleteBlog component
    setDeleteVisible(true)
  }

  const handleDeleteClose = () => {
    setDeleteVisible(false)
  }

  const updateQuery = (searchInput, listInput, filterInput) => {

    const newSearchParams = new URLSearchParams()    

    if(searchInput){
      newSearchParams.append("searchBy", searchInput)
    }
    if(listInput){
      newSearchParams.append("listBy", listInput)
    }
    if(filterInput && filterInput.length > 0){
      newSearchParams.append("filterBy", filterInput)
    }
    
    history.push({
      pathname: HOME_PATH,
      search: newSearchParams.toString()
    })

    // setQueryParams()
    setSearchBy(searchInput)
    setListBy(listInput)
    setFilterBy(filterInput)
    
    // blogRefetch()
  }

  const callUpdateQuery = (inputSearchBy, 
                           inputListBy,
                           inputFilterBy,
                           type) => {
        
    if(type === "search"){
      updateQuery(inputSearchBy, inputListBy, userFilterBy)
    }
    
    if(type === "filter"){
      inputFilterBy = 
      Array.isArray(inputFilterBy) ? inputFilterBy.join(",") : inputFilterBy
      updateQuery(userSearchBy, userListBy, inputFilterBy)
    }
    
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
    <div data-testId="blog-container" className={classes.root}>
          <SearchSortBar 
          searchBy={searchBy}
          listBy={listBy}
          handleSubmit={callUpdateQuery}/>
          <Grid container className={classes.parentContainer}>
            <Grid container xs={3}>
              <FilterBox 
              currentValue={filterBy} 
              handleSubmit={callUpdateQuery}/>
            </Grid>
            <Grid container xs={6} className={classes.blogContainer}>
              {getBlogs()}
            </Grid>
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
