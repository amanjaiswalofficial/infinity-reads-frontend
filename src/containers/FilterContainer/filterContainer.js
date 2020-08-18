// Library imports
import React, {useState, useContext} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory} from 'react-router'
import { MuiThemeProvider } from '@material-ui/core/styles';

// Custom imports
import SecondaryButton from 'components/Buttons/SecondaryButton/secondaryButton'
import {HOME_PATH, REFRESH_STATE} from 'utils/constants'
import {AppContext} from 'context/appContext'
import {useStyles, theme} from './makeCSS'


const FilterContainer = ({queryParams}) => {

  const {userSearch, 
         userList, 
         userFilter} = queryParams
  
  const getDefaultFilters = (filter) => {
    return filter ? filter.split(",").map((singleItem) => {
      return parseInt(singleItem)
    }) : []
  }

  const classes = useStyles();
  const history = useHistory()

  const [state, dispatch] = useContext(AppContext);
  const [inputFilters, setInputFilters] = useState(getDefaultFilters(userFilter))


  const handleToggle = (value) => () => {
    const currentIndex = inputFilters.indexOf(value);
    const newChecked = [...inputFilters];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setInputFilters(newChecked);
  };

  const handleClick = () => {
    const newSearchParams = new URLSearchParams()    

    if(userSearch){
      newSearchParams.append("searchBy", userSearch)
    }
    if(userList){
      newSearchParams.append("listBy", userList)
    }
    if(inputFilters && inputFilters.length > 0){
      newSearchParams.append("filterBy", inputFilters.join(","))
    }
    
    // update URL
    history.push({
      pathname: HOME_PATH,
      search: newSearchParams.toString()
    })

    // dispatch action causing refetch blogs
    dispatch({
      type: REFRESH_STATE,
      payload: {
        reload: true
      }
    })
  }

  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.parent}>
      <div className={classes.title}>
        Available Tags
      </div>
      <div className={classes.root}>
        <List>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem 
              key={value} 
              role={undefined} 
              dense 
              button
              className={classes.singleChoice}
              onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={inputFilters.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                className={classes.singleChoiceText} 
                id={labelId} 
                primary={`Line item ${value + 1}`} />
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className={classes.submitButton}>
        <SecondaryButton 
        text={"Apply"} 
        textColor={"#F67280"}  
        handleClick={handleClick}/>
      </div>
    </div>
    </MuiThemeProvider>
  );
}

export default FilterContainer
