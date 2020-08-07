import React, {useState, useContext} from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton';
import {useStyles} from './makeCSS'
import { AppContext } from "context/appContext"
import editButton from "assets/img/edit_icon.png"
import deleteButton from "assets/img/delete_icon.png"


const BlogItem = ({id, title, content, author, imageURL, postedBy, handleEdit, handleDelete}) => {

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
            className={
              state.user.email === author ? 
              classes.postedByAuthor : 
              classes.postedByReader
              }>Posted By  
            <a 
            className={classes.links} 
            href="http://www.github.com/amanjaiswalofficial">{author}</a></div>

            <div>
            {
              state.user.email === author ?
              <span>
                <a href="#" onClick={e => handleEdit(author, title, content)}>
                  <img className={classes.editButton} src={editButton} alt=""/>
                </a>
                <a href="#" onClick={e => handleDelete(id)}>
                  <img className={classes.deleteButton} src={deleteButton} alt=""/>
                </a>
              </span>: null
            }
            <PrimaryButton text={"Read More"} handleClick={e => openURL(postedBy)}/>

            </div>
            
            </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default BlogItem