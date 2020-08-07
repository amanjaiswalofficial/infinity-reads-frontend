import React, {useState } from 'react'
import { useMutation } from '@apollo/client';

import MessageDialog from 'components/MessageDialog/messageDialog'
import BlogDialog from 'components/BlogDialog/blogDialog'
import {POST_BLOG} from 'utils/queries'


const NewBlogDialog = () => {

    const [msgVisibility, setMsgVisibility] = useState(false)
    const [blogDialogVisible, setBlogDialogVisible] = useState(false)
    const [postBlog, { data, loading, error}] = useMutation(POST_BLOG)

    const handlePostBlog = (author, title, content) => {

        postBlog({variables: {title: title, content: content}}).catch(err => console.log(err))
        setMsgVisibility(true)
        closeDialog()
        
    }

    const closeMsgDialog = () => {
        setMsgVisibility(false)
    }

    const openDialog = () => {
        setBlogDialogVisible(true)
    }

    const closeDialog = () => {
        setBlogDialogVisible(false)
    }

    return (
        <div style={{position: "fixed", width: "100%", display: "flex", flexWrap: "wrap"}}>
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

            <BlogDialog 
            dialogVisible={blogDialogVisible} 
            handleSubmit={handlePostBlog}
            handleClose={closeDialog}/>
            <div style={{marginLeft:"auto", marginRight: "0", marginTop: "20px"}}>
                <button onClick={openDialog}>Write</button>
            </div>
        </div>
    )
}

export default NewBlogDialog
