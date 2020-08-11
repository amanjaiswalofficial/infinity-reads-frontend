import React, {useState, useEffect, useContext} from 'react'
import MessageDialog from 'components/MessageDialog/messageDialog'
import { useMutation } from '@apollo/client';

import {DELETE_BLOG} from 'utils/queries'
import {AppContext} from "context/appContext"
import MutationDialog from 'components/MutationDialog/mutationDialog'

const DeleteBlog = ({active, handleClose}) => {

    const [messageVisible, setMessageVisible] = useState(false)
    const [mutationVisible, setMutationVisible] = useState(false)
    const [state, dispatch] = useContext(AppContext);
    const [deleteBlog, 
        { loading: deleteLoading, 
          error: deleteError, 
          data: deleteData}] = useMutation(DELETE_BLOG)


    useEffect(() => {
        if(active){
            setMessageVisible(true)
        }
    }, [active])

    const callDeleteBlog = () => {
        setMessageVisible(false)
        deleteBlog({variables: {_id: state.deleteBlog._id}}).catch(err => console.log(err))
        setMutationVisible(true)
    }

    const handleMessageClose = () => {
        setMessageVisible(false)
        handleClose()
    }

    const handleMutationClose = (code) => {
        if(code === 200){
            dispatch({
                type: "REFRESH_STATE",
                payload: {
                  reload: true
                }
              })
        }
        setMutationVisible(false)
        handleClose()

    }

    return (
        <div>
            {
                deleteLoading || deleteError || deleteData  ? 
                <MutationDialog 
                action={"deleteBlog"}
                visibleState={mutationVisible}
                data={deleteData}
                loading={deleteLoading}
                error={deleteError}
                handleClose={handleMutationClose}
                /> 
                : 
                null
                
            }
            <MessageDialog
            message={"Delete this blog?"} 
            visibleState={messageVisible}
            handlePrimary={callDeleteBlog}
            handleSecondary={handleMessageClose}
            />
        </div>
    )
}

export default DeleteBlog
