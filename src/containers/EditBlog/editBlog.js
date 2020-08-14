// Library imports
import React, {useState, useEffect, useContext} from 'react'
import { useMutation } from '@apollo/client';

// Custom imports
import { EDIT_BLOG } from 'utils/queries'
import BlogDialog from 'components/BlogDialog/blogDialog'
import { AppContext } from "context/appContext"
import MutationDialog from 'components/MutationDialog/mutationDialog'
import { REFRESH_STATE } from 'utils/constants';


const EditBlog = ({data, active, handleClose}) => {

    const [disptach] = useContext(AppContext)
    const [blogDialogVisible, setBlogDialogVisible] = useState(false)
    const [mutationVisible, setMutationVisible] = useState(false)

    const [editBlog, 
        { loading: editLoading, 
          error: editError, 
          data: editData}] = useMutation(EDIT_BLOG)

    // When active is true, show blogDialog with required data
    useEffect(() => {
        if(active){
            setBlogDialogVisible(true)
        }
    }, [active])

    const handleMutationClose = (code) => {
        // if the edit operation is successful,
        // update state to refresh component
        if(code === 200){
            disptach({
                type: REFRESH_STATE,
                payload: {
                  reload: true
                }
              })
        }
        setMutationVisible(false)
        handleClose()
    }

    const handleEditBlog = (_id, title, content, user_id) => {
        setBlogDialogVisible(false)
        setMutationVisible(true)

        // call GraphQL mutation
        editBlog({variables: {_id, title, content, user_id}}).catch(err => console.log(err))
    }

    // Return component that handles blogDialog and mutationDialog boxes
    // Based on user input and choice
    return (
        <div>
            {
                editLoading || editError || editData   ? 
                <MutationDialog 
                action={"updateBlog"}
                visibleState={mutationVisible}
                data={editData}
                loading={editLoading}
                error={editError}
                handleClose={handleMutationClose}
                /> 
                : 
                null
                
            }
            {
                active ? <BlogDialog 
                data={data}
                dialogVisible={blogDialogVisible} 
                handleSubmit={handleEditBlog}
                handleClose={handleClose}/> : null
            }
        </div>
    )
}

export default EditBlog
