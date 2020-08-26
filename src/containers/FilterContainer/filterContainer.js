// Library imports
import React, {useState, useContext} from 'react'
import { useHistory} from 'react-router'
import { MuiThemeProvider } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner'
import { useQuery } from '@apollo/client';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Custom imports
import SecondaryButton from 'components/Buttons/SecondaryButton/secondaryButton'
import CheckBoxes from 'components/CheckBoxes/checkBoxes'
import {AppContext} from 'context/appContext'
import {useStyles, theme} from './makeCSS'
import {makeParams} from 'utils/helperFunctions'
import { COLOR_MODE, DEFAULT_FILTER_TAGS, HOME_PATH } from 'utils/constants';
import { GET_FILTERS } from 'utils/queries'


const FilterContainer = ({queryParams}) => {

  const {userFilter} = queryParams
  
  // split the string into array of values to find default filters
  const getDefaultFilters = (filter) => {
    return filter ? filter.split(",") : []
  }

  
  const history = useHistory()

  const [state] = useContext(AppContext);
  const [selectedTag, setSelectedTag] = useState(getDefaultFilters(userFilter))
  const [availableTag, setAvailableTag] = useState([])

  // Change mode based on state
  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)();

  const 
    { 
      loading: filterLoading, 
      error: filterError, 
      data: filterData,
    } = useQuery(GET_FILTERS);

  // handle checkBox item press
  const handleToggle = (value) => () => {
    
    // get index of value clicked
    const currentIndex = selectedTag.indexOf(value);
    const newChecked = [...selectedTag];
    
    // if it is not in current selected tags, add it,
    // else remove it
    if (currentIndex === -1) {
      newChecked.push(value);
    } 
    else 
    {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedTag(newChecked);

  };


  // update the URL to get updated results
  const handleClick = () => {
   
    // convert the filters into a string separated by ,
    const filterString = 
      selectedTag.length > 0 ? 
      selectedTag.join(",") : 
      null

    const newParams = makeParams({"filter": filterString})

    // update the URL with new params
    history.push({
      pathname: HOME_PATH,
      search: newParams.toString()
    })  
  }
    
  // get status if a checkbox containing 
  // value is already checked or not
  const getCheckedStatus = (value) => {
    return selectedTag.indexOf(value) !== -1
  }

  // fetch the available filters and display them
  const getFilters = () => {
    
    // if error, display sample filter tags
    if(filterError && availableTag.length === 0){
      setAvailableTag(DEFAULT_FILTER_TAGS)
    }


    if(filterData && availableTag.length === 0){
      setAvailableTag(filterData.tags.data.tags)
    }

  }

  return (
    <MuiThemeProvider theme={theme(colorMode)}>
      {
        getFilters()
      }
      <div className={classes.parent} data-testid="filter-container">
        {
          filterLoading 
          ?
          <div className={classes.loader}>
              <Loader
                type="TailSpin"
                color="#11325B"
                timeout={5000} //3 secs
              />
          </div> 
          :
          null
        }
        {
          filterData || filterError 
          ?
          <div className={classes.title}>
            Available Tags
          </div> 
          :
          null
        }
        <
          CheckBoxes
          values={availableTag}
          getCheckedStatus={getCheckedStatus}
          handleToggle={handleToggle}
        />
          {
            filterData || filterError 
            ?
            <div className={classes.submitButton}>
              <SecondaryButton 
              text={"Apply"} 
              textColor={"#F67280"}  
              handleClick={handleClick}/>
            </div> 
            :
            null
          }
      </div>      
    </MuiThemeProvider>
  );
}

export default FilterContainer
