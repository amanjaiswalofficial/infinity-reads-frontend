import React,{ useState, useContext } from 'react'


import BlogItem from 'components/BlogItem/blogItem'
import EditBlog from 'containers/EditBlog/editBlog'
import DeleteBlog from 'containers/DeleteBlog/deleteBlog'
import { AppContext } from 'context/appContext'
import {REFRESH_STATE} from "utils/constants"

const SingleBlog = ({data}) => {

    const [state, dispatch] = useContext(AppContext)

    const [editVisible, setEditVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)

    const callRefetch = (code) => {

        if(code && code === 200){
            dispatch({
                type: REFRESH_STATE,
                payload: {
                  reload: true
                }
              })
        }
    }

    const handleEditOpen = () => {
        setEditVisible(true)
    }

    const handleEditClose = (code = null) => {
        callRefetch(code)
        setEditVisible(false)
    }

    const handleDeleteOpen = () => {
        setDeleteVisible(true)
    }

    const handleDeleteClose = (code = null) => {
        callRefetch(code)
        setDeleteVisible(false)
    }

    return (
        <div>
            <BlogItem 
            data={data} 
            handleEdit={handleEditOpen} 
            handleDelete={handleDeleteOpen}/>
            <EditBlog
            data={data}
            active={editVisible}
            handleClose={handleEditClose}
            />
            <DeleteBlog
            data={data}
            active={deleteVisible}
            handleClose={handleDeleteClose}/>
        </div>
    )

}

export default SingleBlog
