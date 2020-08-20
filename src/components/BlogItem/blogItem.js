// Library imports
import React, {useContext} from 'react';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

// Custom imports
import { AppContext } from "context/appContext"
import {COLOR_MODE} from 'utils/constants'
import {useStyles} from './makeCSS'

const BlogItem = ({data, handleEdit, handleDelete}) => {

  const {id, title, content, user_id, tags} = data

  const [state] = useContext(AppContext);

  // Change mode based on state
  const colorMode = COLOR_MODE[state.theme.mode]
  const classes = useStyles(colorMode)()


  // Return a single blogItem component with options to
  // 1.Read more on blog
  // 2.Open User profile
  // 3.Edit or Delete a blog based on authentication
  return (

    <Grid 
    item xs={12} 
    className={`${classes.root}`} 
    style={{padding: "10px"}}  
    >
      <div className={classes.parentBox}>
        <span className={classes.spanTitle}>
          <button className={classes.title}>
          {title}
          </button>

        </span>
      </div>
      <div className={classes.spanContent}>
        {content}
      </div>
      <div className={classes.postedBy}>
        <div>
          <span className={classes.content}>tags: </span>
          <span className={classes.content}>{tags.join(",")}</span>
        </div>
        <div>
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
                    color="secondary" 
                    className={classes.deleteButton}/>
                  </Tooltip>
                  </button>
                </span>: null
              }
          </span>
          </div>
      </div>
    </Grid>
  );
}

export default BlogItem
