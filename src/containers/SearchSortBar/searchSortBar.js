// Library imports
import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { useHistory} from 'react-router'

// Custom imports
import SearchBar from 'components/SearchBar/searchBar'
import SortBox from 'components/SortBox/sortBox'
import SecondaryButton from 'components/Buttons/SecondaryButton/secondaryButton';
import {useStyles} from './makeCSS'
import {HOME_PATH} from 'utils/constants'
import {makeParams} from 'utils/helperFunctions'



const SearchSortBar = ({queryParams}) => {


    const {userSearch, userList} = queryParams

    const classes = useStyles();
    const history = useHistory()

    const [inputSearch, setInputSearch] = useState(userSearch)
    const [inputList, setInputList] = useState(userList)

    const handleClick = (e) => {
      // if Enter key is pressed or A Button is clicked
      if(e.key === "Enter" || !e.key){

        let queryParams = {}

        queryParams["search"] = inputSearch
        queryParams["sort"] = inputList

        const newParams = makeParams(queryParams)

        // update the URL with new params
        history.push({
          pathname: HOME_PATH,
          search: newParams.toString()
        })
      }
    }


    return (
      <div className={classes.parent}>
        <Grid 
        container 
        className={classes.root}>
          <Grid xs={8} item>
            <SearchBar
            currentValue={inputSearch} 
            handleKeyPress={handleClick} 
            handleValueChange={e => setInputSearch(e)}/>
          </Grid>
          <Grid xs={2} item>
            <SortBox
            currentValue={inputList} 
            handleValueChange={e => setInputList(e)}/>
          </Grid>
          <Grid xs={2} item className={classes.boxButton}>
            <SecondaryButton 
              textColor={"#F67280"}  
              text={"Search"} 
              handleClick={handleClick}
              />  
          </Grid>
        </Grid>
      </div>
       
  );
}

export default SearchSortBar
