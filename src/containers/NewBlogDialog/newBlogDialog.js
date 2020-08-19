// Library imports
import React, {useState, useContext } from 'react'
import { useMutation } from '@apollo/client';

// Custom imports
import {AppContext} from "context/appContext"
import MutationDialog from 'components/MutationDialog/mutationDialog'
import BlogDialog from 'components/BlogDialog/blogDialog'
import {POST_BLOG} from 'utils/queries'
import post_blog_icon from 'assets/img/new_blog.png'
import {useStyles} from './makeCSS'
import { REFRESH_STATE } from 'utils/constants';


const NewBlogDialog = () => {

    const classes = useStyles()

    const [state, dispatch] = useContext(AppContext)
    const [msgVisibility, setMsgVisibility] = useState(false)
    const [blogDialogVisible, setBlogDialogVisible] = useState(false)
    
    const [postBlog, 
            { data: postData, 
              loading: postLoading, 
              error: postError} ] = useMutation(POST_BLOG)

    const handlePostBlog = (id, title, content, user_id) => {

        postBlog({variables: {user_id: user_id, title: title, content: content}})
        .catch(err => console.log(err))
        
        setMsgVisibility(true)
        closeDialog()
        
    }

    const closeMsgDialog = (code=null) => {

        // if the postOperation was successful
        // reload the page to get latest blogs
        if(code && code === 200){
            dispatch({
                type: REFRESH_STATE,
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
        <div className={classes.parent}>
            {
                postLoading || postError || postData  ? 
                <MutationDialog
                action={"postBlog"} 
                visibleState={msgVisibility}
                data={postData}
                loading={postLoading}
                error={postError}
                handleClose={closeMsgDialog}
                /> 
                : 
                null
                
            }
            
            <BlogDialog 
            dialogVisible={blogDialogVisible} 
            handleSubmit={handlePostBlog}
            handleClose={closeDialog}/>

            <div className={classes.root}>
                <button onClick={openDialog} className={classes.newBlogButton}>
                    <img src={post_blog_icon} className={classes.newIcon} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default NewBlogDialog
