import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    childBox: {
      width: "100%",
    },
    contentBox: {
      height: "80%"
    },
    blogImage: {
      width: "100%", 
      height: "100%"
    },
    root: {
      margin: "3px",
    },
    links: {
      paddingLeft: "5px",
      "&:hover": {
        color: "#F8B195",
        textDecoration: "None"
    }
    },
    zoomInClass: {
      boxShadow: "3px 3px #6C5B7B",
      border: "1px solid #355C7D",
      borderRadius: "2px 2px",
      transform: "scale(1.015)",
      transition: "transform .2s",
      zIndex: 111
    },
    zoomOutClass: {
      transform: "scale(1)",
      transition: "transform .2s",
      zIndex: 111
    },
    editIcon: {
      height: "30px",
      width: "30px"
    },
    deleteIcon: {
      height: "30px",
      width: "30px"
    },
    iconButtons: {
      background: "None",
      border: "None"
    },
    parentBox: {
      width: "100%", 
      display: "flex"
    },
    spanTitle: {
      fontSize: "24px"
    },
    title: {
      background: "None", 
      padding: "0px", 
      decoration: "None", 
      border: "None",
      "&:hover": {
        fontWeight: "bold"
      }
    },
    profileButton: {
      fontWeight: "bold",
      marginLeft: "4px",
      marginTop: "10px",
      background: "None",
      padding: "0px",
      decoration: "None",
      border: "None",
      "&:hover": {
        color: "#355C7D"
      }
    },
    spanContent: {
      width: "100%", 
      fontWeight: "lighter", 
      maxHeight: "100px"
    },
    content: {
      fontWeight: "lighter",
      maxWidth: "100px",
    },
    postedBy: {
      width: "100%"
    }
  }));
  