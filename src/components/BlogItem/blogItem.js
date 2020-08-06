import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PrimaryButton from 'components/Buttons/PrimaryButton/primaryButton';
import {useStyles} from './makeCSS'


const BlogItem = ({title, content, author, imageURL, postedBy}) => {

  const classes = useStyles();
  const [hoverClass, setHoverClass] = useState(classes.zoomOutClass)


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
            href="http://www.github.com/amanjaiswalofficial">{author}</a></div>
            <PrimaryButton text={"Read More"} handleClick={e => openURL(postedBy)}/>
            </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default BlogItem