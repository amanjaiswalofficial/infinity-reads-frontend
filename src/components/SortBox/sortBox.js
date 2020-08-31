// Library imports
import React, {useContext} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

// Custom imports
import {useStyles} from './makeCSS'
import { COLOR_MODE, SORTBY_VALUES } from 'utils/constants';
import { AppContext } from 'context/appContext';


const SortBox = ({currentValue, handleValueChange}) => {


    const [state] = useContext(AppContext)

    // Change mode based on state
    const colorMode = COLOR_MODE[state.theme.mode]
    const classes = useStyles(colorMode)()

    // Display menu values for sortBy
    const getSortByMenuValues = () => {
      return SORTBY_VALUES.map((singleItem) => {
        return <MenuItem value={singleItem.value} key={singleItem.value}>{singleItem.label}</MenuItem>
      })
    }

    return (
            <FormControl variant="outlined" className={classes.parent}>
              <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={currentValue ? currentValue : ""}
                classes={{
                  root: classes.selectBox,
                  outlined: classes.selectBox,
                  icon: classes.selectBox,

                }}
                onChange={e => handleValueChange(e.target.value)}
                label="Sort By"
                >
                <MenuItem value="">
                  <em>Choose One</em>
                </MenuItem>
                {getSortByMenuValues()} 
              </Select>
            </FormControl> 
    )

}

export default SortBox
