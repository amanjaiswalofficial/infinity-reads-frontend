// Library imports
import React, {useState, useContext} from 'react';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

// Custom imports
import {SAMPLE_DATA} from 'utils/constants'
import {useStyles} from './makeCSS'
import { AppContext } from "context/appContext"


const BlogItem = ({data, handleEdit, handleDelete}) => {

  const classes = useStyles();

  const {id, title, content, user_id} = data
  const [hoverClass, setHoverClass] = useState(classes.zoomOutClass)
  const [state] = useContext(AppContext);

  const zoomIn = () => {
    setHoverClass(classes.zoomInClass)
  }

  const zoomOut = () => {
    setHoverClass(classes.zoomOutClass)
  }

  // Return a single blogItem component with options to
  // 1.Read more on blog
  // 2.Open User profile
  // 3.Edit or Delete a blog based on authentication
  return (

    <Grid 
    item xs={12} 
    className={`${classes.root} ${hoverClass}`} 
    style={{padding: "10px"}} 
    onMouseEnter={zoomIn} 
    onMouseLeave={zoomOut} 
    >
      <div className={classes.parentBox}>
        <span className={classes.spanTitle}>
          <button className={classes.title}>
          {title}
          </button>

        </span>
      </div>
      <div className={classes.spanContent}>
        {content} {SAMPLE_DATA}
      </div>
      <div className={classes.postedBy}>
        <span className={classes.content}>posted by</span>
        <button className={classes.profileButton}>{user_id}</button>
        <span className={classes.actionButtons}>
              {
                state.user.user_id === user_id ?
                <span>
                  <button 
                  className={classes.iconButtons} 
                  onClick={e => handleEdit(id, user_id, title, content)}>
                  <Tooltip title="Edit">
                    <EditSharpIcon 
                    color="secondary" 
                    className={classes.editButton}/>
                  </Tooltip>
                  </button>
                  <button 
                  className={classes.iconButtons} 
                  onClick={e => handleDelete(id)}>
                  <Tooltip title="Delete">
                    <DeleteOutlineSharpIcon 
                    color="action" 
                    className={classes.deleteButton}/>
                  </Tooltip>
                  </button>
                </span>: null
              }
          </span>
      </div>
    </Grid>
  );
}

export default BlogItem
