import React from 'react';
import Grid from '@material-ui/core/Grid';

import BlogContainer from 'containers/BlogContainer/blogContainer'
import SearchSortBar from "containers/SearchSortBar/searchSortBar"
import FilterContainer from 'containers/FilterContainer/filterContainer';
import NewBlogDialog from 'containers/NewBlogDialog/newBlogDialog';


const HomePage = () => {

  let searchParams = new URLSearchParams(window.location.search);
  const userSearch = searchParams.get("searchBy")
  const userList = searchParams.get("listBy")
  const userFilter = searchParams.get("filterBy")

  const queryParams = {
    userSearch,
    userList,
    userFilter
  }

  
  return (
      <div>
        <Grid container style={{marginTop: "65px"}}>
          <Grid xs={3} item>
            <FilterContainer queryParams={queryParams}/>
          </Grid>
          <Grid xs={6} item>
            <SearchSortBar queryParams={queryParams}/>
            <BlogContainer queryParams={queryParams}/>
          </Grid>
          <Grid xs={3} item>
            <NewBlogDialog/>
          </Grid>
        </Grid>
      </div>
  );
}

export default HomePage


// text d8d8d8
// text 51ff0d
// light black 1f1f1f
// dark black 121212