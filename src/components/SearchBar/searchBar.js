// Library imports
import React from 'react'
import TextField from '@material-ui/core/TextField';

// Custom imports
import {useStyles} from './makeCSS.js'

const SearchBar = ({currentValue, 
                    handleKeyPress, 
                    handleValueChange}) => {

    const classes = useStyles()

    return (
            <TextField 
              fullWidth={true}
              id="outlined-basic" 
              placeholder="Search blog here (e.g. Name, Content, Tags)" 
              variant="outlined" 
              InputProps={{
              className: classes.textField
              }}
              value={currentValue}
              onChange={e => handleValueChange(e.target.value)}
              onKeyPress={e => handleKeyPress(e)}
            />
    )

}

export default SearchBar
