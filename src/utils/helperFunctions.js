import { createMuiTheme } from '@material-ui/core/styles';

import {SEARCH_PARAMS} from 'utils/constants'

export const makeParams = (queryParams, losePageCount=true) => {

    
    const searchParams = new URLSearchParams(window.location.search) 
    const newParams = new URLSearchParams()

    SEARCH_PARAMS.forEach((key) => {
        // if a param exist in the URL or its passed via function
        if(queryParams[key] || searchParams.has(key))
        {
            const value = queryParams[key] !== undefined ? 
                          queryParams[key] : 
                          searchParams.get(key)
            if(value){
                newParams.append(key, value)
            }
        }
    })
    

    // unless specified by caller, remove page param
    if(losePageCount){
        newParams.delete("page")
    }

    return newParams

}


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
    },
    grey: {
        main: '#ffffff',
    }
  },
});
