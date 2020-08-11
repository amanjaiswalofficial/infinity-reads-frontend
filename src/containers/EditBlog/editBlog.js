import React, {useState, useEffect, useContext} from 'react'
import BlogDialog from 'components/BlogDialog/blogDialog'
import { useMutation } from '@apollo/client';

import {EDIT_BLOG} from 'utils/queries'
import {AppContext} from "context/appContext"
import MutationDialog from 'components/MutationDialog/mutationDialog'

const EditBlog = ({active, handleClose}) => {

    const [state, disptach] = useContext(AppContext)
    const [data, setData] = useState({})
    const [blogDialogVisible, setBlogDialogVisible] = useState(false)
    const [mutationVisible, setMutationVisible] = useState(false)
    const [editBlog, 
        { loading: editLoading, 
          error: editError, 
          data: editData}] = useMutation(EDIT_BLOG)
    
    useEffect(() => {
        if(active){
            setData({
                user_id: state.editBlog.user_id,
                _id: state.editBlog.user_id,
                title: state.editBlog.title,
                content: state.editBlog.content
            })
            setBlogDialogVisible(true)
        }
    }, [active])

    const handleMutationClose = (code) => {
        if(code === 200){
            disptach({
                type: "REFRESH_STATE",
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
        editBlog({variables: {_id, title, content, user_id}}).catch(err => console.log(err))
    }

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

        {active ? <BlogDialog 
            data={data}
            dialogVisible={blogDialogVisible} 
            handleSubmit={handleEditBlog}
            handleClose={handleClose}/> : null}
        </div>
    )
}

export default EditBlog