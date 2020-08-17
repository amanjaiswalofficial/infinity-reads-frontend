// Library imports
import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

// Custom imports
import SecondaryButton from 'components/Buttons/SecondaryButton/secondaryButton'
import {useStyles} from './makeCSS'


const FilterBox = ({currentValue, handleSubmit}) => {

  let defaultFilters = []
  
  // defaultFilters = currentValue.constructor === "string" ? currentValue.split(",") : currentValue
  // defaultFilters = defaultFilters.map((singleValue) => {
  //           return parseInt(singleValue)
  //       })

  switch(currentValue.constructor){
      case Array:
        defaultFilters = currentValue.map((singleValue) => {
            return parseInt(singleValue)
        })
        break
      case String:
        defaultFilters = currentValue.split(",")
        defaultFilters = defaultFilters.map((singleValue) => {
            return parseInt(singleValue)
        })
        break
      default:
        break
  }


  const classes = useStyles();
  const [inputFilterBy, setInputFilterBy] = useState(defaultFilters);  

  const handleToggle = (value) => () => {
    const currentIndex = inputFilterBy.indexOf(value);
    const newChecked = [...inputFilterBy];

    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setInputFilterBy(newChecked);
  };

  const handleClick = (e) => {
    handleSubmit(null, null, inputFilterBy, "filter")
  }

  return (
    <Grid item xs={8}>
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={inputFilterBy.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
          </ListItem>
        );
      })}
    </List>
    <div>
    <SecondaryButton text={"Apply"} 
            textColor={"#F67280"}  handleClick={handleClick}/>
    </div>
    </Grid>
    
  );
}

export default FilterBox
