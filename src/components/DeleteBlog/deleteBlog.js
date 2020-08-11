import React, {useContext} from 'react'

import {AppContext} from "context/appContext"

const DeleteBlog = ({data, loading, error}) => {

    console.log(data, loading, error)
    const [state, dispatch] = useContext(AppContext);

    return (
        <div>
        {
            state.deleteBlog.visible ? "ABC" : null
        }
        </div>
    )
}

export default DeleteBlog
