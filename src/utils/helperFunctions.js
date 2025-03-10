// Library imports
import { createMuiTheme } from '@material-ui/core/styles';

// Custom imports
import {SEARCH_PARAMS} from 'utils/constants'

export const makeParams = (queryParams, losePageCount=true) => {
    
    const searchParams = new URLSearchParams(window.location.search) 
    const newParams = new URLSearchParams()

    SEARCH_PARAMS.forEach((key) => {
      
        // for every param passed as input, remove it from existing params
        if(queryParams[key] !== undefined){
          searchParams.delete(key)
        }

        const value = queryParams[key] || searchParams.get(key)

        // if the value is not null, add the params to the new searchParams
        if(value){
          newParams.append(key, value)
        }
    })
    

    // unless specified by caller, remove page param
    if(losePageCount){
        newParams.delete("page")
    }

    return newParams

}


// override theme colors for primary and secondary colors
export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F67280',
      main: '#F67280',
      dark: '#F67280',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f50057',
      main: '#f50057',
      dark: '#F67280',
      contrastText: '#000',
    }
  },
});
