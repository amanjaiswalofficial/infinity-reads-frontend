import React, {useState, useContext } from 'react'
import { useMutation } from '@apollo/client';

import {AppContext} from "context/appContext"
import MutationDialog from 'components/MutationDialog/mutationDialog'
import BlogDialog from 'components/BlogDialog/blogDialog'
import {POST_BLOG} from 'utils/queries'
import post_blog_icon from 'assets/img/new_blog.png'
import {useStyles} from './makeCSS'


const NewBlogDialog = () => {

    const classes = useStyles()

    const [state, dispatch] = useContext(AppContext)
    const [msgVisibility, setMsgVisibility] = useState(false)
    const [blogDialogVisible, setBlogDialogVisible] = useState(false)
    const [postBlog, { data, loading, error}] = useMutation(POST_BLOG)

    const handlePostBlog = (_id, title, content, user_id) => {

        postBlog({variables: {user_id: user_id, title: title, content: content}}).then(data => console.log(data)).catch(err => console.log(err))
        setMsgVisibility(true)
        closeDialog()
        
    }

    const closeMsgDialog = (code) => {

        if(code === 200){
            dispatch({
                type: "REFRESH_STATE",
                payload: {
                  reload: true
                }
              })
        }
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
                loading || error || data  ? 
                <MutationDialog
                action={"postBlog"} 
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
                <button onClick={openDialog} className={classes.newBlogButton}>
                    <img src={post_blog_icon} className={classes.newIcon} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default NewBlogDialog
