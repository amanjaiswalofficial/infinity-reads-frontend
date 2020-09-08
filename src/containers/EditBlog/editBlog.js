// Library imports
import React, {useState, useEffect} from 'react'
import { useMutation } from '@apollo/client';

// Custom imports
import { EDIT_BLOG } from 'utils/queries'
import BlogDialog from 'containers/BlogDialog/blogDialog'
import MutationDialog from 'components/MutationComponent/mutationDialog'


const EditBlog = ({data, active, handleClose}) => {

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

    const handleMutationClose = (response) => {
        setMutationVisible(false)
        
        // send status code ahead to process and refresh if successful
        handleClose(response.code)
    }

    const handleEditBlog = (id, title, content, user_id) => {
        setBlogDialogVisible(false)
        setMutationVisible(true)

        // call GraphQL mutation
        editBlog({variables: {id, title, content, user_id}})
        .catch(err => console.log(err))
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
