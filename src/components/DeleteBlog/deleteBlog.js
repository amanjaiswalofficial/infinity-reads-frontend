import React, {useContext, useState, useEffect, useLayoutEffect} from 'react'
import { useMutation } from '@apollo/client';

import MessageDialog from 'components/MessageDialog/messageDialog'
import { AppContext } from "context/appContext"
import {DELETE_BLOG} from 'utils/queries'


const DeleteBlog = () => {

    const [state, dispatch] = useContext(AppContext);
    const [msgVisibility, setMsgVisibility] = useState(false)
    const [deleteBlog, { data, loading, error}] = useMutation(DELETE_BLOG)

    // useEffect(() => {
    //     console.log("this runs")
    //    if(loading || !error ){
    //     setMsgVisibility(true)
    //     // deleteBlog({variables: {_id: state.deleteBlog.id}})
    //     // console.log(data, loading, error)
    //    }
    // }, [loading])

    const showDeleteDialog = () => {
        deleteBlog({variables: {_id: state.deleteBlog.id}})
        setMsgVisibility(true)
    }

    const closeMsgDialog = () => {
        setMsgVisibility(false)
    }

    return (
        <div>
            {state.deleteBlog.id ? showDeleteDialog() : null}
            {
                loading || error   ? 
                <MessageDialog 
                visibleState={setMsgVisibility}
                data={data}
                loading={loading}
                error={error}
                handleClose={closeMsgDialog}
                /> 
                : 
                null
                
            }
        </div>
    )
}

export default DeleteBlog


/**
 * {state.deleteBlog.id ? setMsgVisibility(true) : null}
        {
                loading || error   ? 
                <MessageDialog 
                visibleState={msgVisibility}
                data={data}
                loading={loading}
                error={error}
                handleClose={closeMsgDialog}
                /> 
                : 
                null
                
        }
 */