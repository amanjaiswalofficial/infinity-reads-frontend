import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';

import BlogContainer from 'containers/BlogContainer/blogContainer'
import SearchSortBar from "containers/SearchSortBar/searchSortBar"
import FilterContainer from 'containers/FilterContainer/filterContainer';
import NewBlogDialog from 'containers/NewBlogDialog/newBlogDialog';
import { useStyles } from './makeCSS'
import { AppContext } from 'context/appContext';
import { COLOR_MODE } from "utils/constants"

const HomePage = () => {

  const [state] = useContext(AppContext)
  
  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)()
  
  // capture queryParams from the url
  let searchParams = new URLSearchParams(window.location.search);
  const userSearch = searchParams.get("search")
  const userList = searchParams.get("sort")
  const userFilter = searchParams.get("filter")
  const userPage = searchParams.get("page")

  // pass it as props to all components
  const queryParams = {
    userSearch,
    userList,
    userFilter,
    userPage
  }

  
  return (
      <div className={classes.body} role="main">
        <Grid container className={classes.root}>
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
