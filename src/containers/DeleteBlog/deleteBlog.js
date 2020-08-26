// Library imports
import React, {useState, useEffect, useContext} from 'react'
import { useMutation } from '@apollo/client';


// Custom imports
import MessageDialog from 'components/MessageDialog/messageDialog'
import {DELETE_BLOG} from 'utils/queries'
import { REFRESH_STATE } from 'utils/constants'
import {AppContext} from "context/appContext"
import MutationDialog from 'components/MutationDialog/mutationDialog'


const DeleteBlog = ({data, active, handleClose}) => {

    const [messageVisible, setMessageVisible] = useState(false)
    const [mutationVisible, setMutationVisible] = useState(false)
    const [state ,dispatch] = useContext(AppContext);
    
    const [deleteBlog, 
        { loading: deleteLoading, 
          error: deleteError, 
          data: deleteData}] = useMutation(DELETE_BLOG)


    // when active is true, display messageDialog for choice
    useEffect(() => {
        if(active){
            setMessageVisible(true)
        }
    }, [active])

    // run GraphQL mutation
    const callDeleteBlog = () => {

        setMessageVisible(false)
        
        // Call GraphQL mutation with required variable
        deleteBlog({variables: {id: data.id}}).catch(err => console.log(err))
        setMutationVisible(true)
    }

    const handleMessageClose = () => {
        setMessageVisible(false)
        handleClose()
    }

    const handleMutationClose = (code) => {

        // if the delete operation was successful,
        // to show new content
        if(code === 200){
            dispatch({
                type: REFRESH_STATE,
                payload: {
                  reload: true
                }
              })
        }
        setMutationVisible(false)
        handleClose()

    }

    // return dialogBox containing MutationDialog and MessageDialog
    // based on visibility
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
            message={`Delete this blog with id: ${data.id}?`} 
            visibleState={messageVisible}
            handlePrimary={callDeleteBlog}
            handleSecondary={handleMessageClose}
            />
        </div>
    )
}

export default DeleteBlog
