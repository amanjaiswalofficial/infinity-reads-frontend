import React, {useState, useContext} from 'react';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton';
import {useStyles} from './makeCSS'
import { AppContext } from "context/appContext"


const BlogItem = ({data, handleEdit, handleDelete}) => {


  const {_id, title, content, user_id} = data
  const classes = useStyles();
  const [hoverClass, setHoverClass] = useState(classes.zoomOutClass)
  const [state, dispatch] = useContext(AppContext);

  const zoomIn = () => {
    setHoverClass(classes.zoomInClass)
  }

  const zoomOut = () => {
    setHoverClass(classes.zoomOutClass)
  }

  const openURL = (url) => {
    window.open("https://medium.com/the-renaissance-developer/learning-python-from-zero-to-hero-8ceed48486d5")
  }

  return (

    <Grid item xs={7} className={`${classes.root} ${hoverClass}`} style={{padding: "0px"}} onMouseEnter={zoomIn} onMouseLeave={zoomOut} >
      <Box data-testid="blog-item" boxShadow={2} display="flex" flexDirection="row" className={classes.parentBox}>
        <Box p={1}>
        <img 
            className={classes.blogImage}
            src={"https://via.placeholder.com/180"} 
            alt=""
            />
        </Box>
        <Box p={1} className={classes.childBox}>
            <Box className={classes.contentBox}>
            <div style={{fontSize: 24}}>{title}</div>
            <div>{content}</div>
            </Box>
            <Box>
            <div 
            className={classes.postedBy}>Posted By  
            <a 
            className={classes.links} 
            href="http://www.github.com/amanjaiswalofficial">{user_id}</a></div>

            <div className={classes.actionButtons}>
            {
              state.user.user_id === user_id ?
              <span>
                <button className={classes.iconButtons} onClick={e => handleEdit(_id, user_id, title, content)}>
                  <EditSharpIcon color="secondary" className={classes.editButton}/>
                </button>
                <button className={classes.iconButtons} onClick={e => handleDelete(_id)}>
                  <DeleteOutlineSharpIcon color="action" className={classes.deleteButton}/>
                </button>
              </span>: null
            }
            <PrimaryButton text={"Read More"} handleClick={e => openURL(_id)}/>

            </div>
            
            </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default BlogItem