import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    newBlogButton: {
        background: "none",
        border: "none"
    },
    newIcon: {
        height: "60px",
        width: "60px",
        "&:hover": {
            borderRadius: "100%/100%",
            border: "1px solid #355C7D",
            textDecoration: "None"
        }
    },
    parentBlock: {
        float: "right",
        marginLeft:"94.5%", 
        marginRight: "0", 
        marginTop: "20px",
        position: "fixed",
        top: "9%", 
        width: "100%"
    }
  }));
