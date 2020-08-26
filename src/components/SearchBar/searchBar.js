// Library imports
import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';

// Custom imports
import {useStyles} from './makeCSS.js'
import { AppContext } from 'context/appContext.js';
import { COLOR_MODE, SEARCH_BAR_MESSAGE } from 'utils/constants.js';

const SearchBar = ({currentValue, 
                    handleKeyPress, 
                    handleValueChange}) => {

    const [state] = useContext(AppContext)
    
    // Change mode based on the state
    const colorMode = COLOR_MODE[state.theme.mode]                      
    const classes = useStyles(colorMode)()

    return (
    <div className={classes.parent}>
          <TextField 
              fullWidth={true}
              id="outlined-basic" 
              placeholder={SEARCH_BAR_MESSAGE}
              variant="outlined" 
              InputProps={{
              className: classes.textField,
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
              }}
              value={currentValue}
              onChange={e => handleValueChange(e.target.value)}
              onKeyPress={e => handleKeyPress(e)}
            />
    </div>
    )

}

export default SearchBar
