import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    parentBox: {
      padding: "0px", 
      margin: "0px", 
      background: "#355C7D",
      borderRadius: "2px 2px"
    },
    childBox: {
      width: "80%"
    },
    contentBox: {
      height: "80%"
    },
    blogImage: {
      width: "100%", 
      height: "100%"
    },
    root: {
      color: "#FFFFFF",
      margin: "3px",
    },
    postedByAuthor: {
      float: "left", 
      width: "69%"
    },
    postedByReader: {
      float: "left", 
      width: "83.1%"
    },
    links: {
      "&:hover": {
        color: "#F8B195",
        textDecoration: "None"
    }
    },
    zoomInClass: {
      transform: "scale(1.015)",
      transition: "transform .2s",
      zIndex: 111
    },
    zoomOutClass: {
      transform: "scale(1)",
      transition: "transform .2s",
      zIndex: 111
    },
    editButton: {
      height: "40px",
      width: "40px",
      borderRadius: "50%"
    },
    deleteButton: {
      height: "40px",
      width: "40px",
      borderRadius: "50%"
    }
  }));