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
    parent: {
        display: "grid",
        justifyContent: "right",
        padding: "0px"
    }
  }));
