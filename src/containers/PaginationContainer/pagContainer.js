import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom';

import { HOME_PATH } from 'utils/constants';
import {makeParams} from 'utils/helperFunctions'

const PaginationContainer = ({count, currentPage}) => {

    const page = parseInt(currentPage) ? parseInt(currentPage) : 1
    const history = useHistory();

    const handleChange = (e, page) => {

        const newParams = makeParams({"page": page}, false)

        history.push({
            pathname: HOME_PATH,
            search: newParams.toString()
          })

    }
    return (
        <div style={{marginTop: 20, marginBottom: 20}}>
           <Pagination page={page} count={count/10} color="primary" onChange={handleChange}/>
        </div>
    )
}

export default PaginationContainer
