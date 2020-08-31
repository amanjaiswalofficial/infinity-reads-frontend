// Library imports
import React, {useState, useContext } from 'react'
import { useMutation } from '@apollo/client';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';

// Custom imports
import {AppContext} from "context/appContext"
import MutationDialog from 'components/MutationDialog/mutationDialog'
import BlogDialog from 'containers/BlogDialog/blogDialog'
import {POST_BLOG} from 'utils/queries'
import {useStyles} from './makeCSS'
import { REFRESH_STATE } from 'utils/constants';
import { Tooltip } from '@material-ui/core';


const NewBlogDialog = () => {

    const classes = useStyles()

    const [state, dispatch] = useContext(AppContext)
    const [msgVisibility, setMsgVisibility] = useState(false)
    const [blogDialogVisible, setBlogDialogVisible] = useState(false)
    
    const [postBlog, 
            { data: postData, 
              loading: postLoading, 
              error: postError} ] = useMutation(POST_BLOG)

    const handlePostBlog = (id, title, content, user_id, tags) => {

        postBlog({variables: {
            user_id: user_id, 
            title: title, 
            content: content, 
            tags: [tags]}})
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
                <Tooltip title="Create New">
                    <button 
                    onClick={openDialog} 
                    className={classes.newBlogButton}>
                        <AddCircleOutlineTwoToneIcon 
                        color="secondary" 
                        fontSize="large"/>
                    </button>
                </Tooltip>
            </div>
        </div>
    )
}

export default NewBlogDialog
