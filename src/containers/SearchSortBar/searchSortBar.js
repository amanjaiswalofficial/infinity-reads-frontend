// Library imports
import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

// Custom imports
import SearchBar from 'components/SearchBar/searchBar'
import SortBox from 'components/SortBox/sortBox'
import SecondaryButton from 'components/Buttons/SecondaryButton/secondaryButton';
import {useStyles} from './makeCSS'


const SearchSortBar = ({searchBy, 
                        listBy, 
                        handleSubmit}) => {

    const classes = useStyles();

    const [inputSearchBy, setInputSearchBy] = useState(searchBy)
    const [inputListBy, setInputListBy] = useState(listBy)

    const handleClick = (e) => {
      // if Enter key is pressed or A Button is clicked
      if(e.key === "Enter" || !e.key){
        handleSubmit(inputSearchBy, inputListBy, [], "search")
      }
    }


    return (
      <div className={classes.parent}>
      <Grid 
      container 
      className={classes.root}>
        <Box className={classes.boxTextField}>
          <SearchBar
          currentValue={inputSearchBy} 
          handleKeyPress={handleClick} 
          handleValueChange={e => setInputSearchBy(e)}/>
        </Box>
        <Box className={classes.boxSelection}>
          <SortBox
          currentValue={inputListBy} 
          handleValueChange={e => setInputListBy(e)}/>
        </Box>
        <Box className={classes.boxButton}>
          <SecondaryButton 
            textColor={"#F67280"}  
            text={"Search"} 
            handleClick={handleClick}
            />  
        </Box>
      </Grid>
      </div>
      
  );
}

export default SearchSortBar
