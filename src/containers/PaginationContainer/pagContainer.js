import React, {useContext} from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom';

import { HOME_PATH, COLOR_MODE } from 'utils/constants';
import {makeParams} from 'utils/helperFunctions'
import { AppContext } from 'context/appContext';
import {useStyles} from './makeCSS'

const PaginationContainer = ({count, currentPage}) => {

    const history = useHistory();
    const [state] = useContext(AppContext)

    // Change mode based on state
    const colorMode = COLOR_MODE[state.theme.mode]
    const classes = useStyles(colorMode)()

    const handleChange = (e, page) => {

        const newParams = makeParams({"page": page}, false)

    // update the URL with new params
    history.push({
            pathname: HOME_PATH,
            search: newParams.toString()
            })

    }
    return (
        <div className={classes.parent}>
           <Pagination 
           classes={{root: classes.root}} 
           page={currentPage} 
           count={count} 
           color="primary" 
           onChange={handleChange}/>
        </div>
    )
}

export default PaginationContainer
