// Library imports
import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

// Custom imports
import {useStyles} from './makeCSS'

const SortBox = ({currentValue, handleValueChange}) => {

    const classes = useStyles()

    return (
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={currentValue}
                className={classes.selectBox}
                onChange={e => handleValueChange(e.target.value)}
                label="Sort By"
              >
                <MenuItem value="">
                  <em>Choose One</em>
                </MenuItem>
                <MenuItem selected={true} value={"+title"}>Title (A-Z)</MenuItem>
                <MenuItem value={"-title"}>Title (Z-A)</MenuItem>
                <MenuItem value={"+date"}>Most Recent</MenuItem>
                <MenuItem value={"-date"}>Oldest</MenuItem> 
              </Select>
            </FormControl> 
    )

}

export default SortBox
